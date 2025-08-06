import type { TestRunnerConfig } from '@storybook/test-runner';
import { toMatchImageSnapshot } from 'jest-image-snapshot';

// Extend Jest matchers
declare global {
  namespace jest {
    interface Matchers<R> {
      toMatchImageSnapshot(options?: any): R;
    }
  }
}

const config: TestRunnerConfig = {
  setup() {
    expect.extend({ toMatchImageSnapshot });
  },
  async postVisit(page, context) {
    // Take a screenshot and create a snapshot
    const screenshot = await page.screenshot();

    // Create a snapshot with the story ID as the identifier
    expect(screenshot).toMatchImageSnapshot({
      customSnapshotIdentifier: context.id,
    });
  },
};

export default config;
