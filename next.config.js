const { withAxiom } = require('next-axiom')

module.exports = withAxiom({
  reactStrictMode: true,
  images: {
    domains: ['files.stripe.com']
  }
})
