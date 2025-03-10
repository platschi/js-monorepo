import { Box } from '@chakra-ui/react';
import { CRatioBoxUi } from './CRatioBox';

describe('CratioBox', () => {
  it('Render skeleton when missing data', () => {
    cy.viewport(600, 500);
    cy.mount(
      <Box paddingY="7" paddingX="4" bg="navy.900" flex="1">
        <CRatioBoxUi actionType="mint" />
      </Box>
    );
    cy.get('.chakra-skeleton').should('be.visible');
  });
  it('Renders current c ratio healthy', () => {
    cy.viewport(600, 500);
    cy.mount(
      <Box paddingY="7" paddingX="4" bg="navy.900" flex="1">
        <CRatioBoxUi
          actionType="burn"
          liquidationRatioPercentage={150}
          targetCRatioPercentage={350}
          currentCRatioPercentage={400}
        />
      </Box>
    );
    cy.get('[data-testid="current c-ratio badge"]')
      .should('be.visible')
      .should('include.text', '400%')
      .should('have.css', 'color', 'rgb(71, 250, 194)');
    cy.get('[data-testid="target-ratio badge"]')
      .should('be.visible')
      .should('include.text', '350%')
      .should('have.css', 'color', 'rgb(71, 250, 194)');
    cy.get('[data-testid="healthy badge"]').should('be.visible').should('include.text', 'HEALTHY');

    cy.get('[data-testid="new c-ratio badge"]').should('not.exist');
  });
  it('Renders current c ratio below current c-ratio', () => {
    cy.viewport(600, 500);
    cy.mount(
      <Box paddingY="7" paddingX="4" bg="navy.900" flex="1">
        <CRatioBoxUi
          actionType="burn"
          liquidationRatioPercentage={150}
          targetCRatioPercentage={350}
          currentCRatioPercentage={300}
        />
      </Box>
    );
    cy.get('[data-testid="current c-ratio badge"]')
      .should('be.visible')
      .should('include.text', '300%')
      .should('have.css', 'color', 'rgb(255, 154, 84)');

    cy.get('[data-testid="target-ratio badge"]')
      .should('be.visible')
      .should('include.text', '350%')
      .should('have.css', 'color', 'rgb(71, 250, 194)');

    cy.get('[data-testid="healthy badge"]')
      .should('be.visible')
      .should('include.text', 'UNHEALTHY');

    cy.get('[data-testid="new c-ratio badge"]').should('not.exist');
  });

  it('Renders current c ratio below liq ratio', () => {
    cy.viewport(600, 500);
    cy.mount(
      <Box paddingY="7" paddingX="4" bg="navy.900" flex="1">
        <CRatioBoxUi
          actionType="mint"
          liquidationRatioPercentage={150}
          targetCRatioPercentage={350}
          currentCRatioPercentage={140}
        />
      </Box>
    );
    cy.get('[data-testid="current c-ratio badge"]')
      .should('be.visible')
      .should('include.text', '140%')
      .should('have.css', 'color', 'rgb(255, 74, 96)');

    cy.get('[data-testid="target-ratio badge"]')
      .should('be.visible')
      .should('include.text', '350%')
      .should('have.css', 'color', 'rgb(71, 250, 194)');

    cy.get('[data-testid="healthy badge"]')
      .should('be.visible')
      .should('include.text', 'UNHEALTHY');

    cy.get('[data-testid="new c-ratio badge"]').should('not.exist');
  });
  describe('Burn', () => {
    it('Renders new c-ratio badge', () => {
      cy.viewport(600, 500);
      cy.mount(
        <Box paddingY="7" paddingX="4" bg="navy.900" flex="1">
          <CRatioBoxUi
            actionType="burn"
            liquidationRatioPercentage={150}
            targetCRatioPercentage={350}
            currentCRatioPercentage={200}
            SNXRate={2}
            collateral={100}
            debtBalance={50}
            amount={10}
          />
        </Box>
      );
      cy.get('[data-testid="new c-ratio badge"]')
        .should('be.visible')
        .should('include.text', '500%')
        .should('have.css', 'color', 'rgb(71, 250, 194)');
    });
  });
  describe('Mint', () => {
    it('Renders new c-ratio badge', () => {
      cy.viewport(600, 500);
      cy.mount(
        <Box paddingY="7" paddingX="4" bg="navy.900" flex="1">
          <CRatioBoxUi
            actionType="mint"
            liquidationRatioPercentage={150}
            targetCRatioPercentage={350}
            currentCRatioPercentage={500}
            collateral={100}
            SNXRate={2}
            debtBalance={50}
            amount={5}
          />
        </Box>
      );
      cy.get('[data-testid="new c-ratio badge"]')
        .should('be.visible')
        .should('include.text', '364%')
        .should('have.css', 'color', 'rgb(71, 250, 194)');
    });
  });
});
