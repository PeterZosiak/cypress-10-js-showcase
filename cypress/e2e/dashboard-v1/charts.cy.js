// import { qase } from 'cypress-qase-reporter/dist/mocha';
// import charts from '../../pages/components/charts';
// import chartsPage from '../../pages/charts.page';
// import personaFilter from '../../pages/components/persona-filter.component';
// import timelineFilter from '../../pages/components/timeline-filter.component';

// describe('Charts', () => {
//   beforeEach(() => {
//     cy.cssDisableMotion();
//     cy.login('/home');
//     cy.wait(5000);
//     cy.visit('/dodreams-drive-ahead/charts');
//     cy.wait(5000);

//     window.localStorage.setItem('persona', 'name_A');
//   });

//   describe('Home page', () => {

//     // qase([4], it('should contains all Chart list items, sortable and filterable elements', () => {
//     //   chartsPage.sortDropdown().should('be.visible').children()
//     //     .should('have.css', 'border-radius', '6px')
//     //     .should('have.css', 'box-shadow', 'rgba(255, 255, 255, 0.4) -2px -4px 18px 0px, rgba(0, 0, 0, 0.08) 2px 4px 12px 0px')
//     //     .should('have.css', 'background-color', 'rgb(240, 240, 240)').children()
//     //     .should('have.css', 'color', 'rgb(19, 61, 102)');

//     //   chartsPage.searchInput().should('be.visible')
//     //     .should('have.css', 'border-radius', '6px')
//     //     .should('have.css', 'box-shadow', 'rgba(255, 255, 255, 0.4) -2px -4px 18px 0px, rgba(0, 0, 0, 0.08) 2px 4px 12px 0px')
//     //     .should('have.css', 'background-color', 'rgb(240, 240, 240)')
//     //     .should('have.css', 'color', 'rgb(19, 61, 102)');

//     //   chartsPage.churnListItem().should('be.visible')
//     //     .should('have.css', 'color', 'rgb(19, 61, 102)')
//     //     .should('have.css', 'background-color', 'rgb(255, 255, 255)')
//     //     .should('have.css', 'box-shadow', 'rgba(255, 255, 255, 0.6) -2px -4px 18px 0px, rgba(0, 0, 0, 0.08) 2px 4px 12px 0px')
//     //     .should('have.css', 'border-radius', '8px');
//     //   chartsPage.engagementListItem().should('be.visible')
//     //     .should('have.css', 'color', 'rgb(19, 61, 102)')
//     //     .should('have.css', 'background-color', 'rgb(255, 255, 255)')
//     //     .should('have.css', 'box-shadow', 'rgba(255, 255, 255, 0.6) -2px -4px 18px 0px, rgba(0, 0, 0, 0.08) 2px 4px 12px 0px')
//     //     .should('have.css', 'border-radius', '8px');
//     //   chartsPage.monetizationListItem().should('be.visible')
//     //     .should('have.css', 'color', 'rgb(19, 61, 102)')
//     //     .should('have.css', 'background-color', 'rgb(255, 255, 255)')
//     //     .should('have.css', 'box-shadow', 'rgba(255, 255, 255, 0.6) -2px -4px 18px 0px, rgba(0, 0, 0, 0.08) 2px 4px 12px 0px')
//     //     .should('have.css', 'border-radius', '8px');
//     //   chartsPage.overallGrowthListItem().should('be.visible')
//     //     .should('have.css', 'color', 'rgb(19, 61, 102)')
//     //     .should('have.css', 'background-color', 'rgb(255, 255, 255)')
//     //     .should('have.css', 'box-shadow', 'rgba(255, 255, 255, 0.6) -2px -4px 18px 0px, rgba(0, 0, 0, 0.08) 2px 4px 12px 0px')
//     //     .should('have.css', 'border-radius', '8px');
//     //   chartsPage.progressionListItem().should('be.visible')
//     //     .should('have.css', 'color', 'rgb(19, 61, 102)')
//     //     .should('have.css', 'background-color', 'rgb(255, 255, 255)')
//     //     .should('have.css', 'box-shadow', 'rgba(255, 255, 255, 0.6) -2px -4px 18px 0px, rgba(0, 0, 0, 0.08) 2px 4px 12px 0px')
//     //     .should('have.css', 'border-radius', '8px');
//     //   chartsPage.retentionListItem().should('be.visible')
//     //     .should('have.css', 'color', 'rgb(19, 61, 102)')
//     //     .should('have.css', 'background-color', 'rgb(255, 255, 255)')
//     //     .should('have.css', 'box-shadow', 'rgba(255, 255, 255, 0.6) -2px -4px 18px 0px, rgba(0, 0, 0, 0.08) 2px 4px 12px 0px')
//     //     .should('have.css', 'border-radius', '8px');
//     //   chartsPage.userExperienceListItem().should('be.visible')
//     //     .should('have.css', 'color', 'rgb(19, 61, 102)')
//     //     .should('have.css', 'background-color', 'rgb(255, 255, 255)')
//     //     .should('have.css', 'box-shadow', 'rgba(255, 255, 255, 0.6) -2px -4px 18px 0px, rgba(0, 0, 0, 0.08) 2px 4px 12px 0px')
//     //     .should('have.css', 'border-radius', '8px');

//     //   cy.visualRegressionSnapshot('Charts - Homepage');
//     // }));

//     // qase(5, it('charts should contains correct values in "Sort by" element', () => {
//     //   chartsPage.sortDropdown().click();
//     //   chartsPage.sortDropdownItem('Name').should('be.visible');
//     //   chartsPage.sortDropdownItem('Last viewed').should('be.visible');

//     //   cy.visualRegressionSnapshot('Charts - Homepage - Sort by opened');
//     // }));

//     // qase(6, it('should be able sort Chart list items', () => {
//     //   chartsPage.sortDropdown().click();
//     //   chartsPage.sortDropdownItem('Name').click();

//     //   chartsPage.chartList().children().eq(6).should('contain', 'Churn');
//     //   chartsPage.chartList().children().eq(5).should('contain', 'Engagement');
//     //   chartsPage.chartList().children().eq(4).should('contain', 'Monetization');
//     //   chartsPage.chartList().children().eq(3).should('contain', 'Overall Growth');
//     //   chartsPage.chartList().children().eq(2).should('contain', 'Progression');
//     //   chartsPage.chartList().children().eq(1).should('contain', 'Retention');
//     //   chartsPage.chartList().children().eq(0).should('contain', 'User Experience');

//     //   chartsPage.navigateChartPage('Overall Growth');
//     //   cy.go('back').wait(5000);
//     //   chartsPage.sortDropdown().click();
//     //   chartsPage.sortDropdownItem('Last viewed').click();
//     //   chartsPage.chartList().children().eq(0).should('contain', 'Overall Growth');

//     //   chartsPage.sortDropdown().click();
//     //   chartsPage.sortDropdownItem('Name').click();

//     //   chartsPage.chartList().children().eq(0).should('contain', 'Churn');
//     //   chartsPage.chartList().children().eq(1).should('contain', 'Engagement');
//     //   chartsPage.chartList().children().eq(2).should('contain', 'Monetization');
//     //   chartsPage.chartList().children().eq(3).should('contain', 'Overall Growth');
//     //   chartsPage.chartList().children().eq(4).should('contain', 'Progression');
//     //   chartsPage.chartList().children().eq(5).should('contain', 'Retention');
//     //   chartsPage.chartList().children().eq(6).should('contain', 'User Experience');

//     // }));

//     // qase(7, it('should be able search Chart list items', () => {
//     //   chartsPage.searchItems('Over');
//     //   chartsPage.overallGrowthListItem().should('be.visible');
//     //   chartsPage.churnListItem().should('not.exist');
//     //   chartsPage.engagementListItem().should('not.exist');
//     //   chartsPage.monetizationListItem().should('not.exist');
//     //   chartsPage.progressionListItem().should('not.exist');
//     //   chartsPage.retentionListItem().should('not.exist');
//     //   chartsPage.userExperienceListItem().should('not.exist');

//     //   cy.visualRegressionSnapshot('Charts - Homepage - Search term - Over');

//     //   chartsPage.searchItems('Re');
//     //   chartsPage.overallGrowthListItem().should('be.visible');
//     //   chartsPage.churnListItem().should('not.exist');
//     //   chartsPage.engagementListItem().should('be.visible');
//     //   chartsPage.monetizationListItem().should('be.visible');
//     //   chartsPage.progressionListItem().should('be.visible');
//     //   chartsPage.retentionListItem().should('be.visible');
//     //   chartsPage.userExperienceListItem().should('not.exist');

//     //   cy.visualRegressionSnapshot('Charts - Homepage - Search term - Re');

//     //   chartsPage.searchItems('Rrrr');
//     //   chartsPage.overallGrowthListItem().should('not.exist');
//     //   chartsPage.churnListItem().should('not.exist');
//     //   chartsPage.engagementListItem().should('not.exist');
//     //   chartsPage.monetizationListItem().should('not.exist');
//     //   chartsPage.progressionListItem().should('not.exist');
//     //   chartsPage.retentionListItem().should('not.exist');
//     //   chartsPage.userExperienceListItem().should('not.exist');

//     //   cy.contains('No results found')
//     //   cy.contains(`Looks like we can't find results based on your search.`);
//     //   cy.visualRegressionSnapshot('Charts - Homepage - Search term - Rrrr');
//     // }));

//     // qase(8, it('should have hover active and inactive state on Chart list items', () => {
//     //   chartsPage.overallGrowthListItem().realHover('mouse');
//     //   //TODO finish this test
//     // }));

//     // qase(9, it('should be able to click to Chart list items and be navigated to sub page', () => {
//     //   chartsPage.overallGrowthListItem().click();
//     //   cy.url().should('include', '/charts/overall-growth');
//     //   cy.go('back').wait(1000);

//     //   chartsPage.retentionListItem().click();
//     //   cy.url().should('include', '/charts/retention');
//     //   cy.go('back').wait(1000);

//     //   chartsPage.progressionListItem().click();
//     //   cy.url().should('include', '/charts/progression');
//     //   cy.go('back').wait(1000);

//     //   chartsPage.userExperienceListItem().click();
//     //   cy.url().should('include', '/charts/user-experience');
//     //   cy.go('back').wait(1000);

//     //   chartsPage.monetizationListItem().click();
//     //   cy.url().should('include', '/charts/monetization');
//     //   cy.go('back').wait(1000);

//     //   chartsPage.engagementListItem().click();
//     //   cy.url().should('include', '/charts/engagement');
//     //   cy.go('back').wait(1000);

//     //   chartsPage.churnListItem().click();
//     //   cy.url().should('include', '/charts/churn');
//     //   cy.go('back').wait(1000);
//     // }));
//   });

//   // TODO - Looks ok now
//   describe('Persona filter', { scrollBehavior: false }, () => {
//     beforeEach(() => {
//       chartsPage.navigateChartPage('Overall Growth');
//       cy.wait(1500)
//       personaFilter.personaFilterToogler().click().wait(1000);
//     });

//     // qase([79], it('should contains Persona filter elements in default state', () => {
//     //   personaFilter.personasFilterWrapper().visualRegressionSnapshotElement(`Persona filter - Default state`);
//     //   personaFilter.selectSegmentDropdown().should('be.visible');
//     //   personaFilter.showEntirePopulationBtn().should('be.visible');
//     //   personaFilter.showEntirePopulationBtn().should('have.css', 'color', 'rgba(19, 61, 102, 0.7)');

//     //   personaFilter.personaAllPlayersBtn().should('be.visible');
//     //   personaFilter.personaAllPlayersBtn().should('have.css', 'box-shadow', 'rgba(189, 193, 209, 0.5) 2px 2px 6px 0px inset');
//     //   personaFilter.personaAllPlayersBtn().visualRegressionSnapshotElement(`Persona filter - All Players button - Selected state`);

//     //   personaFilter.persona1Btn().should('be.visible');
//     //   personaFilter.persona1Btn().should('have.css', 'box-shadow', 'rgba(255, 255, 255, 0.4) -2px -4px 18px 0px, rgba(0, 0, 0, 0.08) 2px 4px 12px 0px');
//     //   personaFilter.persona1Btn().visualRegressionSnapshotElement(`Persona filter - Persona 1 button - Unelected state`);

//     //   personaFilter.persona2Btn().should('be.visible');
//     //   personaFilter.persona2Btn().should('have.css', 'box-shadow', 'rgba(255, 255, 255, 0.4) -2px -4px 18px 0px, rgba(0, 0, 0, 0.08) 2px 4px 12px 0px');
//     //   personaFilter.persona2Btn().visualRegressionSnapshotElement(`Persona filter - Persona 2 button - Unelected state`);

//     //   personaFilter.persona3Btn().should('be.visible');
//     //   personaFilter.persona3Btn().should('have.css', 'box-shadow', 'rgba(255, 255, 255, 0.4) -2px -4px 18px 0px, rgba(0, 0, 0, 0.08) 2px 4px 12px 0px');
//     //   personaFilter.persona3Btn().visualRegressionSnapshotElement(`Persona filter - Persona 3 button - Unelected state`);

//     //   personaFilter.selectSegmentDropdown().contains('My Audience');
//     // }));

//     // qase(80, it('should change Select a segment state on hover', () => {
//     //   personaFilter.selectSegmentDropdownWrapper().realHover()
//     //     .wait(500)
//     //     .should('have.css', 'box-shadow', 'rgba(255, 255, 255, 0.4) -2px -4px 18px 0px, rgba(0, 0, 0, 0.1) 2px 4px 12px 0px')
//     //     .should('have.css', 'background-color', 'rgb(224, 226, 232)');
//     // }));

//     // qase(81, it('should open Select segment dropdown filter on click', () => {
//     //   personaFilter.selectSegmentDropdown().click().wait(500);

//     //   personaFilter.segmentOptionsDropdownExpanded().should('be.visible');
//     //   personaFilter.segmentOptionsDropdownExpanded().should('have.css', 'background-color', 'rgb(241, 244, 246)');
//     //   //personaFilter.segmentOptionsDropdownExpanded().should('have.css', 'box-shadow', '0px 30px 40px rgba(0, 0, 0, 0.12);');
//     //   personaFilter.segmentOptionsDropdownExpanded().visualRegressionSnapshotElement(`Persona filter - Select a segment dropdown - Expanded state`);

//     //   personaFilter.segmentAudienceOptBtn('My Audience').should('be.visible');
//     //   personaFilter.segmentAudienceOptBtn('My Audience').visualRegressionSnapshotElement(`Persona filter - Select a segment dropdown - My audience option - Default state`);

//     //   personaFilter.segmentAudienceOptBtn('test1').should('be.visible');
//     //   personaFilter.segmentAudienceOptBtn('test1').visualRegressionSnapshotElement(`Persona filter - Select a segment dropdown - My audience option - Default state`);
//     // }));

//     // qase(82, it('should change state of Select a segment list item on hover', () => {
//     //   personaFilter.selectSegmentDropdown().click().wait(500);
//     //   personaFilter.segmentOptionsDropdownExpanded().visualRegressionSnapshotElement(`Persona filter - Select a segment dropdown - Expanded state`);

//     //   personaFilter.segmentAudienceOptBtn('test1').realHover().wait(500)
//     //     .should('have.css', 'background-color', 'rgb(255, 255, 255)');
//     //   //.should('have.css', 'border-radius', '38px');
//     // }));

//     // qase(83, it('should change state of Show entire population button on hover', () => {
//     //   personaFilter.showEntirePopulationBtn()
//     //     .should('have.css', 'color', 'rgba(19, 61, 102, 0.7)')
//     //     .realHover('mouse').wait(500)
//     //     .should('have.css', 'color', 'rgb(19, 61, 102)')
//     // }));

//     // qase(84, it('should update Persona filter and Segment filter after click on Show entire population', () => {
//     //   personaFilter.showEntirePopulationBtn().click();

//     //   personaFilter.personaBtsWrapper().should('not.exist');
//     //   personaFilter.personaAllPlayersBtn().should('not.exist');
//     //   personaFilter.persona1Btn().should('not.exist');
//     //   personaFilter.persona2Btn().should('not.exist');
//     //   personaFilter.persona3Btn().should('not.exist');
//     //   personaFilter.showEntirePopulationBtn().should('not.exist');
//     //   personaFilter.selectSegmentDropdown().should('contain', 'Entire Population');
//     //   personaFilter.personaFilterToogler().should('contain', 'Entire Population');
//     //   personaFilter.personasFilterWrapper().visualRegressionSnapshotElement(`Persona filter - Entire Population state`);

//     // }));

//     // qase(85, it('should change state of Persona button on hover', () => {
//     //   personaFilter.persona1Btn()
//     //     .should('have.css', 'background-color', 'rgb(228, 230, 234)')
//     //     .should('have.css', 'box-shadow', 'rgba(255, 255, 255, 0.4) -2px -4px 18px 0px, rgba(0, 0, 0, 0.08) 2px 4px 12px 0px')
//     //     .realHover('mouse')
//     //     .wait(500)
//     //     .should('have.css', 'box-shadow', 'rgba(255, 255, 255, 0.4) -2px -4px 18px 0px, rgba(0, 0, 0, 0.1) 2px 4px 12px 0px')
//     //     .should('have.css', 'background-color', 'rgb(224, 226, 232)');

//     //   personaFilter.persona2Btn()
//     //     .should('have.css', 'background-color', 'rgb(228, 230, 234)')
//     //     .should('have.css', 'box-shadow', 'rgba(255, 255, 255, 0.4) -2px -4px 18px 0px, rgba(0, 0, 0, 0.08) 2px 4px 12px 0px');
//     // }));

//     // qase(86, it('should change state of Persona button on click', () => {
//     //   personaFilter.persona1Btn().click();
//     //   personaFilter.personaFilterToogler().should('contain', 'All Players, Persona Dings');
//     //   personaFilter.personaFilterToogler().visualRegressionSnapshotElement(`Persona filter - Toogler button - All Players, Persona 1`);

//     //   personaFilter.personaAllPlayersBtn().should('have.css', 'background-color', 'rgb(228, 230, 234)');
//     //   personaFilter.personaAllPlayersBtn().should('have.css', 'box-shadow', 'rgba(189, 193, 209, 0.5) 2px 2px 6px 0px inset');
//     //   personaFilter.personaAllPlayersBtn().visualRegressionSnapshotElement(`Persona filter - All Players btn  - Clicked state`);

//     //   personaFilter.persona1Btn().should('have.css', 'background-color', 'rgb(228, 230, 234)');
//     //   personaFilter.persona1Btn().should('have.css', 'box-shadow', 'rgba(189, 193, 209, 0.5) 2px 2px 6px 0px inset');
//     //   personaFilter.persona1Btn().visualRegressionSnapshotElement(`Persona filter - Persona 1 btn  - Clicked state`);

//     //   personaFilter.persona2Btn().should('have.css', 'background-color', 'rgb(228, 230, 234)');
//     //   personaFilter.persona2Btn().should('have.css', 'box-shadow', 'rgba(255, 255, 255, 0.4) -2px -4px 18px 0px, rgba(0, 0, 0, 0.08) 2px 4px 12px 0px');
//     //   personaFilter.persona2Btn().visualRegressionSnapshotElement(`Persona filter - Persona 2 btn  - Default state`);

//     //   personaFilter.clearFilterBtn().should('be.be.visible');
//     //   personaFilter.clearFilterBtn().should('have.css', 'background-color', 'rgba(19, 61, 102, 0.05)');
//     //   personaFilter.clearFilterBtn().visualRegressionSnapshotElement(`Persona filter - Clear btn  - Default state`);
//     // }));

//     // qase(87, it.skip('should disable other Persona buttons after selected six Personas', () => {
//     //  no suficient data for 6 personas
//     // }));

//     // qase(88, it('should change state of Clear filter on hover', () => {
//     //   personaFilter.persona1Btn().click();
//     //   personaFilter.persona2Btn().click();
//     //   personaFilter.clearFilterBtn()
//     //     .should('have.css', 'opacity', '0.7')
//     //     .should('have.css', 'background-color', 'rgba(19, 61, 102, 0.05)')
//     //     .should('have.css', 'color', 'rgb(19, 61, 102)')
//     //     .should('have.css', 'border-radius', '30px')
//     //     .realHover()
//     //     .wait(500)
//     //     .should('have.css', 'opacity', '1')
//     //     .should('have.css', 'background-color', 'rgba(19, 61, 102, 0.08)')
//     //     .should('have.css', 'color', 'rgb(19, 61, 102)')
//     //     .should('have.css', 'border-radius', '30px');
//     // }));

//     // qase(89, it('should update Persona filter after click on Clear filter button', () => {
//     //   personaFilter.persona1Btn().click();
//     //   personaFilter.persona2Btn().click();
//     //   personaFilter.selectAudience('My Audience');
//     //   personaFilter.clearFilterBtn().click();

//     //   personaFilter.clearFilterBtn().should('not.exist');

//     //   personaFilter.personaFilterToogler().should('contain', 'All Players');
//     //   personaFilter.personaFilterToogler().visualRegressionSnapshotElement(`Persona filter - Toogler button - Default state`);

//     //   personaFilter.selectSegmentDropdown().contains('My Audience').should('be.visible');

//     //   personaFilter.personaAllPlayersBtn().should('have.css', 'background-color', 'rgb(228, 230, 234)');
//     //   personaFilter.personaAllPlayersBtn().should('have.css', 'box-shadow', 'rgba(189, 193, 209, 0.5) 2px 2px 6px 0px inset');
//     //   personaFilter.personaAllPlayersBtn().visualRegressionSnapshotElement(`Persona filter - All Players btn  - Clicked state`);

//     //   personaFilter.persona1Btn().should('have.css', 'background-color', 'rgb(228, 230, 234)');
//     //   personaFilter.persona1Btn().should('have.css', 'box-shadow', 'rgba(255, 255, 255, 0.4) -2px -4px 18px 0px, rgba(0, 0, 0, 0.08) 2px 4px 12px 0px');
//     //   personaFilter.persona1Btn().visualRegressionSnapshotElement(`Persona filter - Persona 1 btn  - Default state`);

//     //   personaFilter.persona2Btn().should('have.css', 'background-color', 'rgb(228, 230, 234)');
//     //   personaFilter.persona2Btn().should('have.css', 'box-shadow', 'rgba(255, 255, 255, 0.4) -2px -4px 18px 0px, rgba(0, 0, 0, 0.08) 2px 4px 12px 0px');
//     //   personaFilter.persona2Btn().visualRegressionSnapshotElement(`Persona filter - Persona 2 btn  - Default state`);

//     //   personaFilter.personasFilterWrapper().visualRegressionSnapshotElement(`Persona filter - Default state`);
//     // }));
//   });

//   describe('Timeline filter', { scrollBehavior: false }, () => {
//     beforeEach(() => {
//       chartsPage.navigateChartPage('Overall Growth');
//       cy.wait(5000)
//       timelineFilter.timelineFilterToogler().click().wait(500);
//     });

//     // qase(138, it('should change Timeline filter state on hover', () => {
//     //   timelineFilter.timelineFilterToogler().click().wait(500);
//     //   timelineFilter.timelineFilterTooglerWrapper()
//     //     .should('have.css', 'box-shadow', 'rgba(255, 255, 255, 0.6) -2px -4px 18px 0px, rgba(0, 0, 0, 0.08) 2px 4px 12px 0px')
//     //     .realHover('mouse')
//     //     .wait(500)
//     //     .should('have.css', 'box-shadow', 'rgba(255, 255, 255, 0.6) -2px -4px 18px 0px, rgba(0, 0, 0, 0.1) 2px 4px 12px 0px')
//     //     .should('have.css', 'background-color', 'rgb(234, 235, 237)')
//     //     .should('have.css', 'color', 'rgb(19, 61, 102)');

//     // }));

//     // qase(139, it('should contains Timeline filter elements in default state', () => {
//     //   timelineFilter.timelineFilteWrapperExpanded().should('be.visible')
//     //     .visualRegressionSnapshotElement(`Timeline filter - Default state`);

//     //   timelineFilter.timelineFilterTitle().should('be.visible');
//     //   timelineFilter.yesterdayBtn().should('be.visible');
//     //   timelineFilter.pastWeekBtn().should('be.visible');
//     //   timelineFilter.pastTwoWeeksBtn().should('be.visible');
//     //   timelineFilter.pastMonthBtn().should('be.visible');
//     //   timelineFilter.pastQuarterBtn().should('be.visible');
//     //   timelineFilter.pastYearBtn().should('be.visible');
//     //   timelineFilter.customDateBtn().should('be.visible');
//     // }));

//     // qase(140, it('should see Date unavailable error msg on wrong custom date', () => {
//     //   timelineFilter.customDateBtn().click();
//     //   timelineFilter.startDateInput().should('be.visible');
//     //   timelineFilter.startDateInput().clear().type('01/01/20');

//     //   timelineFilter.wrongDateFormatMsg().should('be.visible');
//     //   timelineFilter.timelineFilteWrapperExpanded().visualRegressionSnapshotElement(`Timeline filter - Start dete - Error msg state`);
//     // }));

//     // qase(141, it('should change Timeline filter option button state on hover', () => {
//     //   // TODO - move this to check default state of Timeline filter test case
//     //   timelineFilter.yesterdayBtn()
//     //     .should('have.css', 'background-color', 'rgb(228, 230, 234)')
//     //     .should('have.css', 'box-shadow', 'rgba(255, 255, 255, 0.4) -2px -4px 18px 0px, rgba(0, 0, 0, 0.08) 2px 4px 12px 0px')
//     //     .visualRegressionSnapshotElement(`Timeline filter - Yesterday btn - Default state`);

//     //   timelineFilter.pastWeekBtn()
//     //     .should('have.css', 'background-color', 'rgb(228, 230, 234)')
//     //     .should('have.css', 'box-shadow', 'rgba(255, 255, 255, 0.4) -2px -4px 18px 0px, rgba(0, 0, 0, 0.08) 2px 4px 12px 0px')
//     //     .visualRegressionSnapshotElement(`Timeline filter - Past Week btn - Default state`);

//     //   timelineFilter.pastTwoWeeksBtn()
//     //     .should('have.css', 'background-color', 'rgb(228, 230, 234)')
//     //     .should('have.css', 'box-shadow', 'rgba(255, 255, 255, 0.4) -2px -4px 18px 0px, rgba(0, 0, 0, 0.08) 2px 4px 12px 0px')
//     //     .visualRegressionSnapshotElement(`Timeline filter - Past 2 Weeks btn - Default state`);

//     //   timelineFilter.pastMonthBtn()
//     //     .should('have.css', 'background-color', 'rgb(228, 230, 234)')
//     //     .should('have.css', 'box-shadow', 'rgba(255, 255, 255, 0.4) -2px -4px 18px 0px, rgba(0, 0, 0, 0.08) 2px 4px 12px 0px')
//     //     .visualRegressionSnapshotElement(`Timeline filter - Past 30 days btn - Default state`);

//     //   timelineFilter.pastQuarterBtn()
//     //     .should('have.css', 'background-color', 'rgb(228, 230, 234)')
//     //     .should('have.css', 'box-shadow', 'rgba(255, 255, 255, 0.4) -2px -4px 18px 0px, rgba(0, 0, 0, 0.08) 2px 4px 12px 0px')
//     //     .visualRegressionSnapshotElement(`Timeline filter - Past Quarter btn - Default state`);

//     //   timelineFilter.pastYearBtn()
//     //     .should('have.css', 'background-color', 'rgb(228, 230, 234)')
//     //     .should('have.css', 'box-shadow', 'rgba(255, 255, 255, 0.4) -2px -4px 18px 0px, rgba(0, 0, 0, 0.08) 2px 4px 12px 0px')
//     //     .visualRegressionSnapshotElement(`Timeline filter - Past Year btn - Default state`);

//     //   timelineFilter.customDateBtn()
//     //     .should('have.css', 'background-color', 'rgb(228, 230, 234)')
//     //     .should('have.css', 'box-shadow', 'rgba(255, 255, 255, 0.4) -2px -4px 18px 0px, rgba(0, 0, 0, 0.08) 2px 4px 12px 0px')
//     //     .visualRegressionSnapshotElement(`Timeline filter - Custom Date btn - Default state`);

//     //   // TODO - only this verification
//     //   timelineFilter.yesterdayBtn()
//     //     .realHover('mouse')
//     //     .wait(500)
//     //     .should('have.css', 'background-color', 'rgb(224, 226, 232)')
//     //     .should('have.css', 'box-shadow', 'rgba(255, 255, 255, 0.4) -2px -4px 18px 0px, rgba(0, 0, 0, 0.1) 2px 4px 12px 0px');

//     //   timelineFilter.pastWeekBtn()
//     //     .realHover('mouse')
//     //     .wait(500)
//     //     .should('have.css', 'background-color', 'rgb(224, 226, 232)')
//     //     .should('have.css', 'box-shadow', 'rgba(255, 255, 255, 0.4) -2px -4px 18px 0px, rgba(0, 0, 0, 0.1) 2px 4px 12px 0px');

//     //   timelineFilter.pastTwoWeeksBtn()
//     //     .realHover('mouse')
//     //     .wait(500)
//     //     .should('have.css', 'background-color', 'rgb(224, 226, 232)')
//     //     .should('have.css', 'box-shadow', 'rgba(255, 255, 255, 0.4) -2px -4px 18px 0px, rgba(0, 0, 0, 0.1) 2px 4px 12px 0px');

//     //   timelineFilter.pastMonthBtn()
//     //     .realHover('mouse')
//     //     .wait(500)
//     //     .should('have.css', 'background-color', 'rgb(224, 226, 232)')
//     //     .should('have.css', 'box-shadow', 'rgba(255, 255, 255, 0.4) -2px -4px 18px 0px, rgba(0, 0, 0, 0.1) 2px 4px 12px 0px');

//     //   timelineFilter.pastQuarterBtn()
//     //     .realHover('mouse')
//     //     .wait(500)
//     //     .should('have.css', 'background-color', 'rgb(224, 226, 232)')
//     //     .should('have.css', 'box-shadow', 'rgba(255, 255, 255, 0.4) -2px -4px 18px 0px, rgba(0, 0, 0, 0.1) 2px 4px 12px 0px');

//     //   timelineFilter.pastYearBtn()
//     //     .realHover('mouse')
//     //     .wait(500)
//     //     .should('have.css', 'background-color', 'rgb(224, 226, 232)')
//     //     .should('have.css', 'box-shadow', 'rgba(255, 255, 255, 0.4) -2px -4px 18px 0px, rgba(0, 0, 0, 0.1) 2px 4px 12px 0px');

//     //   timelineFilter.customDateBtn()
//     //     .realHover('mouse')
//     //     .wait(500)
//     //     .should('have.css', 'background-color', 'rgb(224, 226, 232)')
//     //     .should('have.css', 'box-shadow', 'rgba(255, 255, 255, 0.4) -2px -4px 18px 0px, rgba(0, 0, 0, 0.1) 2px 4px 12px 0px');
//     // }));

//     // qase(149, it('should change Timeline filter option button state on click', () => {
//     //   timelineFilter.yesterdayBtn()
//     //     .realClick()
//     //     .wait(500)
//     //     .should('have.css', 'box-shadow', 'rgba(189, 193, 209, 0.5) 2px 2px 6px 0px inset')
//     //     .visualRegressionSnapshotElement(`Timeline filter - Yesterday btn - Clicked state`);

//     //   timelineFilter.pastWeekBtn()
//     //     .realClick()
//     //     .wait(500)
//     //     .should('have.css', 'box-shadow', 'rgba(189, 193, 209, 0.5) 2px 2px 6px 0px inset')
//     //     .visualRegressionSnapshotElement(`Timeline filter - Past Week btn - Clicked state`);

//     //   timelineFilter.pastTwoWeeksBtn()
//     //     .realClick()
//     //     .wait(500)
//     //     .should('have.css', 'box-shadow', 'rgba(189, 193, 209, 0.5) 2px 2px 6px 0px inset')
//     //     .visualRegressionSnapshotElement(`Timeline filter - Past 2 Weeks btn - Clicked state`);

//     //   timelineFilter.pastMonthBtn()
//     //     .realClick()
//     //     .wait(500)
//     //     .should('have.css', 'box-shadow', 'rgba(189, 193, 209, 0.5) 2px 2px 6px 0px inset')
//     //     .visualRegressionSnapshotElement(`Timeline filter - Past 30 days btn - Clicked state`);

//     //   timelineFilter.pastQuarterBtn()
//     //     .realClick()
//     //     .wait(500)
//     //     .should('have.css', 'box-shadow', 'rgba(189, 193, 209, 0.5) 2px 2px 6px 0px inset')
//     //     .visualRegressionSnapshotElement(`Timeline filter - Past Quarter btn - Clicked state`);

//     //   timelineFilter.pastYearBtn()
//     //     .realClick()
//     //     .wait(500)
//     //     .should('have.css', 'box-shadow', 'rgba(189, 193, 209, 0.5) 2px 2px 6px 0px inset')
//     //     .visualRegressionSnapshotElement(`Timeline filter - Past Year btn - Clicked state`);

//     //   timelineFilter.customDateBtn()
//     //     .realClick()
//     //     .wait(500)
//     //     .should('have.css', 'box-shadow', 'rgba(189, 193, 209, 0.5) 2px 2px 6px 0px inset')
//     //     .visualRegressionSnapshotElement(`Timeline filter - Custom Date btn - Clicked state`);
//     // }));
//   });

//   describe('Overall Growth charts', { scrollBehavior: false }, () => {
//     const textWidgets = {
//       "Installs": {
//         "title": "New Users",
//         "title-tooltip": "Total installs",
//         "glossary:": "New Users is the average daily number of newly activated users i.e. players who opened the game for the first time that day.",
//         "css": ["background-color: rgb(255, 255, 255)", "box-shadow: rgba(0, 0, 0, 0.05) 0px 10px 10px 0px", "border-radius: 8px 8px 8px 22px"],
//         "value": "17"
//       },
//       "3 Day Retention": {
//         "title": "3 Day Retention",
//         "title-tooltip": "Retention D3",
//         "glossary:": "Day 3 (D3) Retention rate is the percentage of Daily Active Users (DAU) who were already active 3 days ago.",
//         "css": ["background-color: rgb(255, 255, 255)", "box-shadow: rgba(0, 0, 0, 0.05) 0px 10px 10px 0px", "border-radius: 8px"],
//         "value": "9.8%"
//       },
//       "7 Day Retention": {
//         "title": "7 Day Retention",
//         "title-tooltip": "Retention D7",
//         "glossary:": "Day 30 (D30) Retention rate is the percentage of Daily Active Users (DAU) who were already active 30 days ago.",
//         "css": ["background-color: rgb(255, 255, 255)", "box-shadow: rgba(0, 0, 0, 0.05) 0px 10px 10px 0px", "border-radius: 8px"],
//         "value": "20.4%"
//       },
//       "30 Day Retention": {
//         "title": "30 Day Retention",
//         "title-tooltip": "Retention D30",
//         "glossary:": "Day 30 (D30) Retention rate is the percentage of Daily Active Users (DAU) who were already active 30 days ago.",
//         "css": ["background-color: rgb(255, 255, 255)", "box-shadow: rgba(0, 0, 0, 0.05) 0px 10px 10px 0px", "border-radius: 8px 22px 8px 8px"],
//         "value": "9.6%"
//       }
//     };

//     const lineWidgets = {
//       "ARPDAU": {
//         "title": "ARPDAU",
//         "title-tooltip": "Average Revenue Per Daily Active User",
//         "glossary:": "Average Revenue Per Daily Active User (ARPDAU) is the average gross revenue generated by players making In-App Purchases (IAP) and/or seeing or watching Ads divided by the number of Daily Active Users (DAU).",
//         "css": ["background-color: rgb(255, 255, 255)", "box-shadow: rgba(0, 0, 0, 0.05) 0px 10px 10px 0px", "border-radius: 8px 8px 8px 22px"],
//         "value": "$3.21"
//       },
//       "ARPPU": {
//         "title": "ARPPU",
//         "title-tooltip": "Average Revenue Per Paying User",
//         "glossary:": "Average Revenue Per Paying User (ARPPU) is the average gross revenue generated by players making In-App Purchases divided by the number of users who made a purchase that day.",
//         "css": ["background-color: rgb(255, 255, 255)", "box-shadow: rgba(0, 0, 0, 0.05) 0px 10px 10px 0px", "border-radius: 8px"],
//         "value": "$3.21"
//       },
//       "ARPU": {
//         "title": "ARPU",
//         "title-tooltip": "Average Revenue Per User",
//         "glossary:": "Average Revenue Per User (ARPU) is the average gross revenue generated by playes making In-App Purchases (IAP) and/or seeing or watching Ads divided by the number of users (active or inactive).",
//         "css": ["background-color: rgb(255, 255, 255)", "box-shadow: rgba(0, 0, 0, 0.05) 0px 10px 10px 0px", "border-radius: 8px"],
//         "value": "$3.21"
//       },
//       "Conversion": {
//         "title": "Conversion",
//         "title-tooltip": "Customer Conversion Rate",
//         "glossary:": "Conversion rate is the percentage of Daily Active Users (DAU) who convert into Paying Users (PU) on a given day.",
//         "css": ["background-color: rgb(255, 255, 255)", "box-shadow: rgba(0, 0, 0, 0.05) 0px 10px 10px 0px", "border-radius: 8px 22px 8px 8px"],
//         "value": "3.21%"
//       },
//       "Time Played": {
//         "title": "Time Played",
//         "title-tooltip": "Total time played",
//         "glossary:": "Time Played is the average amount of time users spend playing your game, which reflects how engaging your game is. It is calculated by multiplying Session Length by Session Count.",
//         "css": ["background-color: rgb(255, 255, 255)", "box-shadow: rgba(0, 0, 0, 0.05) 0px 10px 10px 0px", "border-radius: 8px 8px 8px 22px"],
//         "value": "3.21%"
//       },
//       "Session Time": {
//         "title": "Session Time",
//         "title-tooltip": "Session Length",
//         "glossary:": "Session Length is the average time between the start of a session and the end of a session in your game.",
//         "css": ["background-color: rgb(255, 255, 255)", "box-shadow: rgba(0, 0, 0, 0.05) 0px 10px 10px 0px", "border-radius: 8px"],
//         "value": "3.21%"
//       },
//       "Session Count": {
//         "title": "Session Count",
//         "title-tooltip": "Session Count",
//         "glossary:": "Session Count is the average number of sessions started per Daily Active User (DAU).",
//         "css": ["background-color: rgb(255, 255, 255)", "box-shadow: rgba(0, 0, 0, 0.05) 0px 10px 10px 0px", "border-radius: 8px 22px 8px 8px"],
//         "value": "3.21%"
//       },
//     }

//     const lineCharts = {
//       "Revenue": {
//         "title": "Revenue",
//         "description": "Average Revenue",
//         "title-tooltip": "Total Revenue",
//         "glossary:": "Revenue is the average daily gross revenue generated by players making In-App Purchases (IAP) and/or seeing or watching Ads.",
//         "css": ["background-color: rgb(255, 255, 255)", "box-shadow: rgba(0, 0, 0, 0.05) 0px 10px 10px 0px", "border-radius: 8px 22px"],
//         "value": "$7.2M"
//       },
//       "LTV": {
//         "title": "LTV",
//         "description": "Average Lifetime Value",
//         "title-tooltip": "Lifetime Revenue",
//         "glossary:": "Lifetime Value (LTV) is the average revenue generated by your users over their lifetime.",
//         "css": ["background-color: rgb(255, 255, 255)", "box-shadow: rgba(0, 0, 0, 0.05) 0px 10px 10px 0px", "border-radius: 8px 22px"],
//         "value": "$7.24"
//       },
//       // "CPI": {
//       //   "title": "CPI",
//       //   "description": "Average Cost per Install",
//       //   "title-tooltip": "Cost Per Install",
//       //   "glossary:": "Cost Per Install (CPI) is the average marketing cost for recruiting a new player.",
//       //   "css": ["background-color: rgb(255, 255, 255)", "box-shadow: rgba(0, 0, 0, 0.05) 0px 10px 10px 0px", "border-radius: 8px 22px"],
//       //   "value": "$3.21"
//       // },
//       "Stickiness": {
//         "title": "Stickiness",
//         "description": "Average Stickiness",
//         "title-tooltip": "Stickiness",
//         "glossary:": "Stickiness rate is calculated by dividing the number of Daily Active Users (DAU) by the number of Monthly Active Users (MAU).",
//         "css": ["background-color: rgb(255, 255, 255)", "box-shadow: rgba(0, 0, 0, 0.05) 0px 10px 10px 0px", "border-radius: 8px 22px"],
//         "value": "25.1%"
//       },
//       "DAU": {
//         "title": "Dau",
//         "description": "Average Daily Active Users",
//         "title-tooltip": "Daily Active Users",
//         "glossary:": "Daily Active Users (DAU) is the average number of unique players with at least one session that day.",
//         "css": ["background-color: rgb(255, 255, 255)", "box-shadow: rgba(0, 0, 0, 0.05) 0px 10px 10px 0px", "border-radius: 8px 22px"],
//         "value": "20,346"
//       },
//       "MAU": {
//         "title": "Mau",
//         "description": "Average Monthly Active Users",
//         "title-tooltip": "Monthly Active Users",
//         "glossary:": "Monthly Active Users (MAU) is the average number of unique players with at least one session that month.",
//         "css": ["background-color: rgb(255, 255, 255)", "box-shadow: rgba(0, 0, 0, 0.05) 0px 10px 10px 0px", "border-radius: 8px 22px"],
//         "value": "5,106"
//       },
//     };

//     beforeEach(() => {
//       chartsPage.navigateChartPage('Overall Growth');
//       cy.wait(3000)
//     });

//     qase(10, it('should contains all Overall Growth elements', () => {
//       personaFilter.personaFilterToogler().should('be.visible');
//       timelineFilter.timelineFilterToogler().should('be.visible');

//       for (const [key, value] of Object.entries(charts.lineChartsOverallGrowth())) {
//         cy.log(key);
//         value.should('be.visible');
//         value.scrollIntoView({ duration: 100, offset: { top: -150, left: 0 } })
//         lineCharts[key]['css'].forEach(css => {
//           value.should('have.css', css.split(':')[0], css.split(':')[1].trim());
//         });
//         value.visualRegressionSnapshotElement(`Charts - Overall Growth - ${key} chart`);
//       };

//       //TODO MAU DAU errors
//       for (const [key, value] of Object.entries(charts.textWidgetsOverallGrowth())) {
//         cy.log(key);
//         value.should('be.visible');
//         value.scrollIntoView({ duration: 100, offset: { top: -150, left: 0 } })
//         textCharts[key]['css'].forEach(css => {
//           value.should('have.css', css.split(':')[0], css.split(':')[1].trim());
//         });

//         value.visualRegressionSnapshotElement(`Charts - Overall Growth - ${key} chart`);
//       };

//       cy.visualRegressionSnapshot('Charts - Overall Growth');
//     }));

//     // qase(19, it('should show KPI chart name tooltip on hover', () => {
//     //   // TODO Fix errors - CPI
//     //   charts.setChartsContext(charts.textChartsOverallGrowth());
//     //   for (const [key, value] of Object.entries(textCharts)) {
//     //     cy.log(key);
//     //     charts.chartTitle(key)
//     //       .scrollIntoView({ duration: 100, offset: { top: -100, left: 0 } })
//     //       .realHover('mouse');
//     //     charts.chartTitleTooltip()
//     //       .should('have.text', value['title-tooltip'])
//     //       .should('be.visible')
//     //       .should('have.css', 'background-color', 'rgb(19, 61, 102)')
//     //       .should('have.css', 'box-shadow', 'rgba(7, 55, 99, 0.15) 0px 5px 10px 0px')
//     //       .should('have.css', 'border-radius', '4px');
//     //   }

//     //   charts.setChartsContext(charts.lineChartsOverallGrowth());
//     //   for (const [key, value] of Object.entries(lineCharts)) {
//     //     cy.log(key);
//     //     charts.chartTitle(key)
//     //       .scrollIntoView({ duration: 100, offset: { top: -150, left: 0 } })
//     //       .realHover('mouse');
//     //     charts.chartTitleTooltip()
//     //       .should('have.text', value['title-tooltip'])
//     //       .should('be.visible')
//     //       .should('have.css', 'background-color', 'rgb(19, 61, 102)')
//     //       .should('have.css', 'box-shadow', 'rgba(7, 55, 99, 0.15) 0px 5px 10px 0px')
//     //       .should('have.css', 'border-radius', '4px');
//     //   }
//     // }));

//     // qase(20, it('should expand Overflow menu for KPI chart', () => {
//     //   charts.setChartsContext(charts.textChartsOverallGrowth());

//     //   // TODO chyby
//     //   for (const [key, value] of Object.entries(textCharts)) {
//     //     charts.openOverflowMenu(key).scrollIntoView({ duration: 100, offset: { top: -150, left: 0 } });
//     //     charts.openGlossaryListItem()
//     //       .should('be.visible')
//     //       .should('have.css', 'color', 'rgb(19, 61, 102)')
//     //       .should('have.css', 'font-size', '16px')
//     //       .should('have.css', 'line-height', '19px')
//     //       .realHover('mouse').parent().should('have.css', 'background-color', 'rgba(197, 202, 207, 0.3)');

//     //     charts.exportToCsvListItem()
//     //       .should('be.visible')
//     //       .should('have.css', 'color', 'rgb(19, 61, 102)')
//     //       .should('have.css', 'font-size', '16px')
//     //       .should('have.css', 'line-height', '19px')
//     //       .realHover('mouse').should('have.css', 'background-color', 'rgba(197, 202, 207, 0.3)');
//     //   }

//     // charts.setChartsContext(charts.lineChartsOverallGrowth());
//     // for (const [key, value] of Object.entries(lineCharts)) {
//     //   charts.openOverflowMenu(key);
//     //   charts.exportToCsvListItem()
//     //     .should('be.visible')
//     //     .should('have.css', 'color', 'rgb(19, 61, 102)')
//     //     .should('have.css', 'font-size', '16px')
//     //     .should('have.css', 'line-height', '19px')
//     //     .realHover('mouse').parent().should('have.css', 'background-color', 'rgba(197, 202, 207, 0.3)');
//     // }
//     //}));

//     // qase(21, it('should open Glossary for KPI chart', () => {
//     //   charts.setChartsContext(charts.textChartsOverallGrowth());
//     //   for (const [key, value] of Object.entries(textCharts)) {
//     //     charts.openGlossary(key);
//     //     // TODO - add dropdown assertion
//     //   }

//     //   charts.setChartsContext(charts.lineChartsOverallGrowth());
//     //   for (const [key, value] of Object.entries(lineCharts)) {
//     //     charts.openGlossary(key);
//     //     // TODO - add dropdown assertion
//     //   }
//     // }));

//     // qase(22, it('should export KPI chart data to xls', () => {

//     // }));

//     // qase(34, it('should export KPI chart data to image', () => {

//     // }));

//     // qase(23, it('should be able read value from KPI chart on hover over day with all Personas', () => {

//     // }));

//     // qase(78, it('should be able update KPI chart data based on Persona filter', () => {

//     // }));

//     // qase(90, it('should be able read value from KPI chart on hover over day based on Persona filter', () => {

//     // }));

//     // qase(91, it('should be able show and hide Legends on KPI chart', () => {

//     // }));

//     // qase(93, it('should be able highlight Legend on KPI chart on hover', () => {

//     // }));

//     // qase(94, it('should be able turn off and on Legend on  KPI chart on click', () => {

//     // }));

//     // qase(95, it('should be able read value from KPI chart with disabled Legend', () => {

//     // }));

//     // qase(142, it('should update KPI chart data on date change', () => {

//     // }));
//   });

//   describe('Engagement charts', { scrollBehavior: false }, () => {
//     const lineCharts = {
//       "Retention": {
//         "title": "Retention",
//         "description": "Day 1 Average",
//         "title-tooltip": "Retention",
//         "glossary:": "Retention rate is the percentage of users who continue to engage with your platform over time. Day N retention is the percentage of Daily Active Users (DAU) who were active on days 0 who are also active on Day N.",
//         "css": ["background-color: rgb(255, 255, 255)", "box-shadow: rgba(0, 0, 0, 0.05) 0px 10px 10px 0px", "border-radius: 8px 22px"],
//         "value": "27.1%"
//       },
//       "DAU": {
//         "title": "DAU",
//         "description": "Average Daily Active Users",
//         "title-tooltip": "Daily Active Users",
//         "glossary:": "Daily Active Users (DAU) is the average number of unique players with at least one session that day.",
//         "css": ["background-color: rgb(255, 255, 255)", "box-shadow: rgba(0, 0, 0, 0.05) 0px 10px 10px 0px", "border-radius: 8px 22px"],
//         "value": "20,346"
//       },
//       "New Users": {
//         "title": "New Users",
//         "description": "Average New User Count",
//         "title-tooltip": "Total installs",
//         "glossary:": "New Users is the average daily number of newly activated users i.e. players who opened the game for the first time that day.",
//         "css": ["background-color: rgb(255, 255, 255)", "box-shadow: rgba(0, 0, 0, 0.05) 0px 10px 10px 0px", "border-radius: 8px 22px"],
//         "value": "92,415"
//       },
//       "Session Count": {
//         "title": "Session count",
//         "description": "Average Session Count",
//         "title-tooltip": "Session Count",
//         "glossary:": "Session Count is the average number of sessions started per Daily Active User (DAU).",
//         "css": ["background-color: rgb(255, 255, 255)", "box-shadow: rgba(0, 0, 0, 0.05) 0px 10px 10px 0px", "border-radius: 8px 22px"],
//         "value": "2.5"
//       },
//       "Session Length": {
//         "title": "Session length",
//         "description": "Average Session Length",
//         "title-tooltip": "Session Length",
//         "glossary:": "Session Length is the average time between the start of a session and the end of a session in your game.",
//         "css": ["background-color: rgb(255, 255, 255)", "box-shadow: rgba(0, 0, 0, 0.05) 0px 10px 10px 0px", "border-radius: 8px 22px"],
//         "value": "15.2 minutes"
//       },
//       "Time Played": {
//         "title": "Session count",
//         "description": "Average Time Played",
//         "title-tooltip": "Total time played",
//         "glossary:": "Time Played is the average amount of time users spend playing your game, which reflects how engaging your game is. It is calculated by multiplying Session Length by Session Count.",
//         "css": ["background-color: rgb(255, 255, 255)", "box-shadow: rgba(0, 0, 0, 0.05) 0px 10px 10px 0px", "border-radius: 8px 22px"],
//         "value": "37.5 minutes"
//       }
//     };

//     beforeEach(() => {
//       chartsPage.navigateChartPage('Engagement');
//       cy.wait(5000)
//     });

//     // qase(11, it('should contains all Engagement chart elements', () => {
//     //   personaFilter.personaFilterToogler().should('be.visible');
//     //   timelineFilter.timelineFilterToogler().should('be.visible');

//     //   for (const [key, value] of Object.entries(charts.lineChartsEngagement())) {
//     //     cy.log(key);
//     //     value.should('be.visible');
//     //     value.scrollIntoView({ duration: 100, offset: { top: -150, left: 0 } });
//     //     lineCharts[key]['css'].forEach(css => {
//     //       value.should('have.css', css.split(':')[0], css.split(':')[1].trim());
//     //     });
//     //     value.visualRegressionSnapshotElement(`Charts - Engagement - ${key} chart`);
//     //   };

//     //   cy.visualRegressionSnapshot('Charts - Engagement');
//     // }));

//     // qase(24, it('should show KPI chart name tooltip on hover', () => {
//     //   charts.setChartsContext(charts.lineChartsEngagement());
//     //   for (const [key, value] of Object.entries(lineCharts)) {
//     //     cy.log(key);
//     //     charts.chartTitle(key)
//     //       .scrollIntoView({ duration: 100, offset: { top: -100, left: 0 } })
//     //       .realHover('mouse');
//     //     charts.chartTitleTooltip()
//     //       .should('have.text', value['title-tooltip'])
//     //       .should('be.visible')
//     //       .should('have.css', 'background-color', 'rgb(19, 61, 102)')
//     //       .should('have.css', 'box-shadow', 'rgba(7, 55, 99, 0.15) 0px 5px 10px 0px')
//     //       .should('have.css', 'border-radius', '4px');
//     //   }
//     // }));

//     // qase(25, it('should expand Overflow menu for KPI chart', () => {
//     //   // TODO add mising Export to Png
//     //   charts.setChartsContext(charts.lineChartsEngagement());
//     //   for (const [key, value] of Object.entries(lineCharts)) {
//     //     charts.openOverflowMenu(key).scrollIntoView({ duration: 100, offset: { top: -150, left: 0 } });

//     //     charts.exportToCsvListItem()
//     //       .should('be.visible')
//     //       .should('have.css', 'color', 'rgb(19, 61, 102)')
//     //       .should('have.css', 'font-size', '16px')
//     //       .should('have.css', 'line-height', '19px')
//     //       .realHover('mouse').wait(500).should('have.css', 'background-color', 'rgba(197, 202, 207, 0.3)');
//     //   }
//     // }));

//     // qase(26, it('should open Glossary for KPI chart', () => {

//     // }));

//     // qase(27, it('should export KPI chart data to xls', () => {

//     // }));

//     // qase(35, it('should export KPI chart data to image', () => {

//     // }));

//     // qase(28, it('should be able read value from KPI chart on hover over day with all Personas', () => {

//     // }));

//     // qase(96, it('should be able update KPI chart data based on Persona filter', () => {

//     // }));

//     // qase(97, it('should be able read value from KPI chart on hover over day based on Persona filter', () => {

//     // }));

//     // qase(98, it('should be able show and hide Legends on KPI chart', () => {

//     // }));

//     // qase(100, it('should be able highlight Legend on KPI chart on hover', () => {

//     // }));

//     // qase(101, it('should be able turn off and on Legend on KPI chart on click', () => {

//     // }));

//     // qase(102, it('should be able read value from KPI chart with disabled Legend', () => {

//     // }));

//     // qase(143, it('should update KPI chart data on date change', () => {

//     // }));
//   });

//   describe('Retention charts', () => {
//     const lineCharts = {
//       "Retention": {
//         "title": "Retention",
//         "description": "Day 1 Average",
//         "title-tooltip": "Retention",
//         "glossary:": "Retention by Install Cohort is showing the different Retention curves for each cohort of players (group of players who became active on the same day).",
//         "css": ["background-color: rgb(255, 255, 255)", "box-shadow: rgba(0, 0, 0, 0.05) 0px 10px 10px 0px", "border-radius: 8px 22px"],
//         "value": "30.1%"
//       },
//       "Session Length by Retention": {
//         "title": "Session Length by Retention",
//         "title-tooltip": "Average Time Played",
//         "glossary:": "Session Length by Game Age is showing how the average Session Length differs depending on the number of days the players have started playing the game.",
//         "css": ["background-color: rgb(255, 255, 255)", "box-shadow: rgba(0, 0, 0, 0.05) 0px 10px 10px 0px", "border-radius: 8px 22px"],
//         "description": "Day 1 Average",
//         "value": "503.2 seconds"
//       },
//       "D3 Retention": {
//         "title": "D3 Retention",
//         "description": "Average Day 3 Retention",
//         "title-tooltip": "D3 Retention",
//         "glossary:": "Day 3 (D3) Retention rate is the percentage of Daily Active Users (DAU) who were already active 3 days ago.",
//         "css": ["background-color: rgb(255, 255, 255)", "box-shadow: rgba(0, 0, 0, 0.05) 0px 10px 10px 0px", "border-radius: 8px 22px"],
//         "value": "31.2%"
//       },
//       "D7 Retention": {
//         "title": "D7 Retention",
//         "description": "Average Day 7 Retention",
//         "title-tooltip": "D7 Retention",
//         "glossary:": "Day 7 (D7) Retention rate is the percentage of Daily Active Users (DAU) who were already active 7 days ago.",
//         "css": ["background-color: rgb(255, 255, 255)", "box-shadow: rgba(0, 0, 0, 0.05) 0px 10px 10px 0px", "border-radius: 8px 22px"],
//         "value": "20.4%"
//       },
//       "D30 Retention": {
//         "title": "D30 Retention",
//         "description": "Average Day 30 Retention",
//         "title-tooltip": "",
//         "glossary:": "Day 30 (D30) Retention rate is the percentage of Daily Active Users (DAU) who were already active 30 days ago.",
//         "css": ["background-color: rgb(255, 255, 255)", "box-shadow: rgba(0, 0, 0, 0.05) 0px 10px 10px 0px", "border-radius: 8px 22px"],
//         "value": "9.6%"
//       },
//       "Session Count": {
//         "title": "Session Count by Return...",
//         "description": "Average Time Played",
//         "title-tooltip": "Session Count by Returning Users",
//         "glossary:": "Session Count by Returning Users is the average number of sessions started by users who had previously been inactive for 14 consecutive days.",
//         "css": ["background-color: rgb(255, 255, 255)", "box-shadow: rgba(0, 0, 0, 0.05) 0px 10px 10px 0px", "border-radius: 8px 22px"],
//         "value": "37.5 minutes"
//       },
//       "Returning Purchases": {
//         "title": "Purchases by Returning Users",
//         "description": "Average Purchases by Returning Users",
//         "title-tooltip": "Purchases by Returning Users",
//         "glossary:": "Purchases by Returning Users is the average number of purchases made by users who had previously been inactive for 14 consecutive days.",
//         "css": ["background-color: rgb(255, 255, 255)", "box-shadow: rgba(0, 0, 0, 0.05) 0px 10px 10px 0px", "border-radius: 8px 22px"],
//         "value": "257"
//       },
//       "Ads Watched": {
//         "title": "Ads Watched by Returni...",
//         "description": "Average Ads Watched by Returning Users",
//         "title-tooltip": "Ads Watched by Returning Users",
//         "glossary:": "Ads Watched by Returning Users is the average number of ad counts for users who had previously been inactive for 14 consecutive days.",
//         "css": ["background-color: rgb(255, 255, 255)", "box-shadow: rgba(0, 0, 0, 0.05) 0px 10px 10px 0px", "border-radius: 8px 22px"],
//         "value": "1.5"
//       }
//     };

//     beforeEach(() => {
//       chartsPage.navigateChartPage('Retention');
//       cy.wait(5000)
//     });

//     // qase(14, it('should contains all Retention chart elements', () => {
//     //   personaFilter.personaFilterToogler().should('be.visible');
//     //   timelineFilter.timelineFilterToogler().should('be.visible');

//     //   for (const [key, value] of Object.entries(lineCharts)) {
//     //     cy.log(key);
//     //     assert.isTrue(charts.lineChartsRetention()[key] !== undefined, `Chart ${key} is not defined`);
//     //     charts.lineChartsRetention()[key].should('be.visible')
//     //       .wait(500)
//     //       .visualRegressionSnapshotElement(`Charts - Retention - ${key} chart`);
//     //   }

//     //   cy.visualRegressionSnapshot('Charts - Retention');
//     // }));

//     // qase(29, it('should show KPI chart name tooltip on hover', () => {

//     // }));

//     // qase(30, it('should expand Overflow menu for KPI chart', () => {

//     // }));

//     // qase(73, it('should open Glossary for KPI chart', () => {

//     // }));

//     // qase(31, it('should export KPI chart data to xls', () => {

//     // }));

//     // qase(36, it('should export KPI chart data to image', () => {

//     // }));

//     // qase(32, it('should be able read value from KPI chart on hover over day with all Personas', () => {

//     // }));

//     // qase(103, it('should be able update KPI chart data based on Persona filter', () => {

//     // }));

//     // qase(104, it('should be able read value from KPI chart on hover over day based on Persona filter', () => {

//     // }));

//     // qase(105, it('should be able show and hide Legends on KPI chart', () => {

//     // }));

//     // qase(107, it('should be able highlight Legend on KPI chart on hover', () => {

//     // }));

//     // qase(108, it('should be able turn off and on Legend on  KPI chart on click', () => {

//     // }));

//     // qase(109, it('should be able read value from KPI chart with disabled Legend', () => {

//     // }));

//     // qase(144, it('should update KPI chart data on date change', () => {

//     // }));
//   });

//   describe('Churn charts', () => {
//     const lineCharts = {
//       "Churn Rate": {
//         "title": "Churn Rate",
//         "description": "Average Churn Rate",
//         "title-tooltip": "Churn Rate",
//         "glossary:": "Churn Rate is the percentage of users inactive for 14 consecutive days who were active at the beginning of those 14 days.",
//         "css": ["background-color: rgb(255, 255, 255)", "box-shadow: rgba(0, 0, 0, 0.05) 0px 10px 10px 0px", "border-radius: 8px 22px"],
//         "value": "2.5%"
//       },
//       "Churners by Day": {
//         "title": "Churners by Day",
//         "description": "Day After Install of Highest Churn",
//         "title-tooltip": "Daily Number of Churned Users",
//         "glossary:": "Churners by Game Age is the number of users who become inactive for 14 consecutive days by number of days since they have started playing the game.",
//         "css": ["background-color: rgb(255, 255, 255)", "box-shadow: rgba(0, 0, 0, 0.05) 0px 10px 10px 0px", "border-radius: 8px 22px"],
//         "value": "Day 52"
//       },
//       "Churners by Level": {
//         "title": "Churners by Level",
//         "description": "Day After Install of Highest Churn",
//         "title-tooltip": "Churners by Level",
//         "glossary:": "Churners by Level is the number of users who become inactive for 14 consecutive days after reaching a certain level.",
//         "css": ["background-color: rgb(255, 255, 255)", "box-shadow: rgba(0, 0, 0, 0.05) 0px 10px 10px 0px", "border-radius: 8px 22px"],
//         "value": "Day 52"
//       },
//       "Top Levels of Churning Payers": {
//         "title": "Top Levels of Churning Payers",
//         "description": "Day After Install of Highest Churn",
//         "title-tooltip": "Top Levels of Churning Payers",
//         "glossary:": "Top Levels of Churning Payers is the number of Paying Users (PU) who become inactive for 14 consecutive days after reaching a certain level.",
//         "css": ["background-color: rgb(255, 255, 255)", "box-shadow: rgba(0, 0, 0, 0.05) 0px 10px 10px 0px", "border-radius: 8px 22px"],
//         "value": "Day 52"
//       }
//     };

//     beforeEach(() => {
//       chartsPage.navigateChartPage('Churn');
//       cy.wait(5000)
//     });

//     // qase(15, it('should contains all Churn chart elements', () => {
//     //   personaFilter.personaFilterToogler().should('be.visible');
//     //   timelineFilter.timelineFilterToogler().should('be.visible');

//     //   for (const [key, value] of Object.entries(lineCharts)) {
//     //     cy.log(key);
//     //     assert.isTrue(charts.lineChartsChurn()[key] !== undefined, `Chart ${key} is not defined`);
//     //     charts.lineChartsChurn()[key].should('be.visible')
//     //       .wait(500)
//     //       .visualRegressionSnapshotElement(`Charts - Churn - ${key} chart`);
//     //   }

//     //   cy.visualRegressionSnapshot('Charts - Churn');
//     // }));

//     // qase(37, it('should show KPI chart name tooltip on hover', () => {

//     // }));

//     // qase(38, it('should expand Overflow menu for KPI chart', () => {

//     // }));

//     // qase(74, it('should open Glossary for KPI chart', () => {

//     // }));

//     // qase(39, it('should export KPI chart data to xls', () => {

//     // }));

//     // qase(41, it('should export KPI chart data to image', () => {

//     // }));

//     // qase(40, it('should be able read value from KPI chart on hover over day with all Personas', () => {

//     // }));

//     // qase(110, it('should be able update KPI chart data based on Persona filter', () => {

//     // }));

//     // qase(111, it('should be able read value from KPI chart on hover over day based on Persona filter', () => {

//     // }));

//     // qase(112, it('should be able show and hide Legends on KPI chart', () => {

//     // }));

//     // qase(113, it('should be able highlight Legend on KPI chart on hover', () => {

//     // }));

//     // qase(114, it('should be able turn off and on Legend on  KPI chart on click', () => {

//     // }));

//     // qase(115, it('should be able read value from KPI chart with disabled Legend', () => {

//     // }));

//     // qase(145, it('should update KPI chart data on date change', () => {

//     // }));
//   });

//   describe('Progression chart', () => {
//     const lineCharts = {
//       "Level Starts": {
//         "title": "Level Starts",
//         "description": "Average Level Stars",
//         "title-tooltip": "Level Starts",
//         "glossary:": "Level Starts is the number of times a game level has been started.",
//         "css": ["", ""],
//         "value": "2.5%"
//       },
//       "Level Completes": {
//         "title": "Level Completes",
//         "description": "Average Level Completes",
//         "title-tooltip": "Level Completes",
//         "glossary:": "Level Completes is the number of times a game level has been completed.",
//         "css": ["", ""],
//         "value": "Day 52"
//       },
//       "Fail Rate": {
//         "title": "Fail Rate",
//         "description": "Average Fail Rate",
//         "title-tooltip": "Fail Rate",
//         "glossary:": "Fail Rate is the number of levels failed divided by the number of levels started.",
//         "css": ["", ""],
//         "value": "Day 52"
//       },
//       "Win Rate": {
//         "title": "Win Rate",
//         "description": "Average Win Rate",
//         "title-tooltip": "Win Rate",
//         "glossary:": "Win Rate is the number of levels completed divided by the number of levels started.",
//         "css": ["", ""],
//         "value": "Day 52"
//       },
//       "Win Loss by DAU": {
//         "title": "Win Loss by DAU",
//         "description": "Average Win/Loss by Daily Active User",
//         "title-tooltip": "Win/Loss by DAU",
//         "glossary:": "Win to Loss Ratio by Daily Active Users (DAU) is calculated by dividing the number of levels completed per DAU by the number of levels failed per DAU.",
//         "css": ["", ""],
//         "value": "Day 52"
//       },
//     };

//     beforeEach(() => {
//       chartsPage.navigateChartPage('Progression');
//       cy.wait(5000)
//     });

//     // qase(16, it('should contains all Progression chart elements', () => {
//     //   personaFilter.personaFilterToogler().should('be.visible');
//     //   timelineFilter.timelineFilterToogler().should('be.visible');

//     //   for (const [key, value] of Object.entries(lineCharts)) {
//     //     cy.log(key);
//     //     assert.isTrue(charts.lineChartsProgression()[key] !== undefined, `Chart ${key} is not defined`);
//     //     charts.lineChartsProgression()[key].should('be.visible')
//     //       .wait(500)
//     //       .visualRegressionSnapshotElement(`Charts - Progression - ${key} chart`);
//     //   }

//     //   cy.visualRegressionSnapshot('Charts - Progression');
//     // }));

//     // qase(42, it('should show KPI chart name tooltip on hover', () => {

//     // }));

//     // qase(43, it('should expand Overflow menu for KPI chart', () => {

//     // }));

//     // qase(75, it('should open Glossary for KPI chart', () => {

//     // }));

//     // qase(44, it('should export KPI chart data to xls', () => {

//     // }));

//     // qase(46, it('should export KPI chart data to image', () => {

//     // }));

//     // qase(45, it('should be able read value from KPI chart on hover over day with all Personas', () => {

//     // }));

//     // qase(116, it('should be able update KPI chart data based on Persona filter', () => {

//     // }));

//     // qase(117, it('should be able read value from KPI chart on hover over day based on Persona filter', () => {

//     // }));

//     // qase(118, it('should be able show and hide Legends on KPI chart', () => {

//     // }));

//     // qase(119, it('should be able highlight Legend on KPI chart on hover', () => {

//     // }));

//     // qase(120, it('should be able turn off and on Legend on  KPI chart on click', () => {

//     // }));

//     // qase(121, it('should be able read value from KPI chart with disabled Legend', () => {

//     // }));

//     // qase(146, it('should update KPI chart data on date change', () => {

//     // }));
//   });

//   describe('Monetization charts', () => {
//     const lineCharts = {
//       "LTV": {
//         "title": "LTV",
//         "description": "Average Lifetime Values",
//         "title-tooltip": "Lifetime Revenue",
//         "glossary:": "Lifetime Value (LTV) is the average revenue generated by your users over their lifetime.",
//         "css": ["", ""],
//         "value": "2.5%"
//       },
//       "Total Revenue": {
//         "title": "Total Revenue",
//         "description": "Average Total Revenue",
//         "title-tooltip": "Total Revenue",
//         "glossary:": "Revenue is the average daily gross revenue generated by players making In-App Purchases (IAP) and/or seeing or watching Ads.",
//         "css": ["", ""],
//         "value": "Day 52"
//       },
//       "ARPDAU": {
//         "title": "ARPDAU",
//         "description": "Average Average Revenue Per Daily Active User",
//         "title-tooltip": "Average Revenue Per Daily Active User",
//         "glossary:": "Average Revenue Per Daily Active User (ARPDAU) is the average gross revenue generated by players making In-App Purchases (IAP) and/or seeing or watching Ads divided by the number of Daily Active Users (DAU).",
//         "css": ["", ""],
//         "value": "Day 52"
//       },
//       "Transaction Size": {
//         "title": "Transaction Size",
//         "description": "Average Transaction Size",
//         "title-tooltip": "Transaction Size",
//         "glossary:": "Transaction Size is the average amount your Paying Users (PU) spend per purchase. It is calculated by dividing the In-App Purchases (IAP) revenue by the number of purchases.",
//         "css": ["", ""],
//         "value": "Day 52"
//       },
//       "Purchase Count": {
//         "title": "Purchase Count",
//         "description": "Average Purchase Count",
//         "title-tooltip": "Transaction Count",
//         "glossary:": "Purchase Count is the number of purchases made by users.",
//         "css": ["", ""],
//         "value": "Day 52"
//       },
//     };

//     beforeEach(() => {
//       chartsPage.navigateChartPage('Monetization');
//       cy.wait(5000)

//     });

//     // qase(17, it('should contains all Monetization chart elements', () => {
//     //   personaFilter.personaFilterToogler().should('be.visible');
//     //   timelineFilter.timelineFilterToogler().should('be.visible');

//     //   for (const [key, value] of Object.entries(lineCharts)) {
//     //     cy.log(key);
//     //     assert.isTrue(charts.lineChartsMonetization()[key] !== undefined, `Chart ${key} is not defined`);
//     //     charts.lineChartsMonetization()[key].should('be.visible')
//     //       .wait(500)
//     //       .visualRegressionSnapshotElement(`Charts - Monetization - ${key} chart`);
//     //   }

//     //   cy.visualRegressionSnapshot('Charts - Monetization');
//     // }));

//     // qase(47, it('should show KPI chart name tooltip on hover', () => {

//     // }));

//     // qase(48, it('should expand Overflow menu for KPI chart', () => {

//     // }));

//     // qase(76, it('should open Glossary for KPI chart', () => {
//     //   charts.setChartsContext(charts.lineChartsMonetization());
//     //   for (const [key, value] of Object.entries(lineCharts)) {
//     //     charts.openGlossary(key);
//     //     cy.wait(1000);
//     //     charts.closeGlossary();
//     //   }
//     // }));

//     // qase(49, it('should export KPI chart data to xls', () => {

//     // }));

//     // qase(51, it('should export KPI chart data to image', () => {

//     // }));

//     // qase(50, it('should be able read value from KPI chart on hover over day', () => {

//     // }));

//     // qase(134, it('should be able show and hide Legends on KPI chart', () => {

//     // }));

//     // qase(135, it('should be able highlight Legend on KPI chart on hover', () => {

//     // }));

//     // qase(136, it('should be able turn off and on Legend on  KPI chart on click', () => {

//     // }));

//     // qase(137, it('should be able read value from KPI chart with disabled Legend', () => {

//     // }));

//     // qase(147, it('should update KPI chart data on date change', () => {

//     // }));
//   });

//   // describe('User Experience charts', () => {
//   //   qase(65, it('should contains all User Experience chart elements', () => {

//   //   }));

//   //   qase(66, it('should show KPI chart name tooltip on hover', () => {

//   //   }));

//   //   qase(67, it('should expand Overflow menu for KPI chart', () => {

//   //   }));

//   //   qase(77, it('should open Glossary for KPI chart', () => {

//   //   }));

//   //   qase(68, it('should export KPI chart data to xls', () => {

//   //   }));

//   //   qase(70, it('should export KPI chart data to image', () => {

//   //   }));

//   //   qase(69, it('should be able read value from KPI chart on hover over day', () => {

//   //   }));

//   //   qase(72, it('should have different segment colors on Donut chart based on number of segments', () => {

//   //   }));

//   //   qase(148, it('should update KPI chart data on date change', () => {

//   //   }));
//   // });

// });
