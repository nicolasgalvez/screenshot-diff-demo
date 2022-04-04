# screenshot-diff-demo
Barebones screenshot testing project.

The idea is to ensure that a screenshot of a webpage will remain the same after updates.

This is just a basic test example that takes a peek at google.com.

Before big updates to WordPress, I usually go through and take snapshots manually while writing a test plan. But I would like to feed a list of URIs to this and just have it do the heavy lifting for me. Maybe also get several screenshots per page for each breakpoint defined in the project. I'll have to see how to make a test harness that can do that.

## Usage

1. Install by doing ye olde `npm install`
2. Run the test `npm run test`

That should launch a headless browser and take a screenshot and compare it with the one saved in the `__image_snapshots__` folder

The test should fail because the screenshot will be different.

Look in `__image_snapshots__/__diff_output__` to see an image with the differences outlined in the center picture.

If your UI changes you can delete the assiciated image in `__image_snapshots__` and then rerun the test. It will automatically create a new image if one is missing. Then the next time you run the test, it will compare as usual.
