#!/bin/bash
SLACK_ALERTS=${SLACK_ALERTS:-}
SLACK_WEBHOOK_URL=${SLACK_WEBHOOK_URL:-}
SLACK_CHANNEL=${SLACK_CHANNEL:-}
SLACK_USERNAME=${SLACK_USERNAME:-}
CYPRESS_BASE_URL=${CYPRESS_BASE_URL:-}
CYPRESS_RECORD_KEY=${CYPRESS_RECORD_KEY:-}
ENV=${ENV:-}

BUILD_ID=$(date '+%Y%m%d%H%M%S')
echo $BUILD_ID

send_slack_message() {
  local color=${1}
  local title=${2}
  local message=${3}

  echo 'Sending to #'${SLACK_CHANNEL}'...'
  curl --silent --data-urlencode \
    "payload={\"channel\": \"${SLACK_CHANNEL}\", \"username\": \"${SLACK_USERNAME}\", \"link_names\": \"true\", \"attachments\": [{\"author_name\": \"${SLACK_USERNAME}\", \"title\": \"${title}\", \"text\": \"${message}\", \"color\": \"${color}\"}]}" \
    ${SLACK_WEBHOOK_URL} || true
  echo
}

export CYPRESS_BASE_URL=${CYPRESS_BASE_URL}
export CYPRESS_VIDEO=false
export NO_COLOR=1
export CYPRESS_RECORD_KEY=${CYPRESS_RECORD_KEY}

oldstr="dashboard-v1-sentry-"
newstr=""
envtag=$(echo $SLACK_CHANNEL | sed "s/$oldstr/$newstr/")

if [[ $ENV == "prod" || $ENV == "staging" ]]
then
  echo "Running Cypress tests in ${ENV} environment"
  log=$(npx cypress run --browser electron --env name=${ENV} --record false)
else
  echo "Running Cypress tests in ${ENV} environment"
  log=$(npx cypress run --browser electron --env name=preview --record true --parallel --ci-build-id $BUILD_ID)
fi

exitCode=$?
# remove quotes so it doesn't break slack call
log=${log//[\"\`\']/ }
echo $log

if [ ${exitCode} -eq 0 ]
then
  if [[ $SLACK_ALERTS == "true" ]]
  then
    send_slack_message "Success" "Cypress tests Passed ${CYPRESS_BASE_URL}" "Automated tests have Passed. Log: \`\`\`${log}\`\`\`"
    echo "all tests passed"
    exit 0
  fi
else
  if [[ $SLACK_ALERTS == "true" ]]
  then
    send_slack_message "danger" "Cypress tests failed ${CYPRESS_BASE_URL}" "Automated tests have failed. Log: \`\`\`${log}\`\`\`"
    exit 1
  fi
fi
