const path = require(`path`)
const getResourcesFromHTML = require(`../get-resources-from-html`)

const htmlPath = path.resolve(`${__dirname}/index.html`)

it(`it extracts resources correctly`, () => {
  const resources = getResourcesFromHTML(htmlPath)
  expect(resources).toMatchSnapshot()
})
