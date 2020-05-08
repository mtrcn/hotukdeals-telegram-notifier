const index = require('./index');

test('Runs function handler locally', async () => {
    let response = await index.handler({}, null)
    expect(JSON.stringify(response)).toContain('Successfully processed')
  }
)