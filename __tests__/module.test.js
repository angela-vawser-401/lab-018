const fileRead = require('../file-read');
const writeFile = require('../file-write');

describe('fs testing', () => {
  it('reads a file', () => {
    return fileRead('./test-text.txt')
      .then(body => {
        expect(body).toEqual('Wooooooooord to your mother');
      });
  });

  it('writes a new file', () => {
    return writeFile('./write-test.txt', 'Preach')
      .then(() => {
        return fileRead('./write-test.txt');
      })
      .then(body => {
        expect(body).toEqual('Preach');
      });
  });
});