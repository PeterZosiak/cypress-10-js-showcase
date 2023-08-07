FROM cypress/included:10.9.0

WORKDIR /e2e
RUN apt update && apt install -y \
gconf-service libasound2 libatk1.0-0 \
libc6 libcairo2 libcups2 \
libdbus-1-3 libexpat1 libfontconfig1 \
libgcc1 libgconf-2-4 libgdk-pixbuf2.0-0 \
libglib2.0-0 libgtk-3-0 libnspr4 \
libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 \
libx11-6 libx11-xcb1 libxcb1 libxcomposite1 \
libxcursor1 libxdamage1 libxext6 libxfixes3 \
libxi6 libxrandr2 libxrender1 libxss1 libxtst6 \
ca-certificates fonts-liberation libappindicator1 \
libnss3 lsb-release xdg-utils wget

COPY package.json /e2e/package.json
COPY yarn.lock /e2e/yarn.lock
RUN yarn install

COPY . /e2e

ENV ELECTRON_EXTRA_LAUNCH_ARGS="--disable-gpu --disable-dev-shm-usage --disable-software-rasterizer"
ENV LIBVA_DRIVER_NAME=--disable-software-rasterizer

ENTRYPOINT ["/e2e/entrypoint.sh"] 