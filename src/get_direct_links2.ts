import http from 'https';

const getRedirect = (url, cb) => {
  http.get(url, (res) => {
    let data = '';
    res.on('data', (chunk) => {
      data += chunk;
    });
    res.on('end', () => {
      const match = data.match(/<meta\s+property="og:image"\s+content="([^"]+)"/i);
      if (match && match[1]) {
        console.log('DIRECT_IMAGE_URL:', match[1]);
      } else {
        const imgMatch = data.match(/<img\s+src="([^"]+)"/i);
        console.log('First img match:', imgMatch ? imgMatch[1] : 'None');
      }
    });
  }).on('error', (err) => {
    console.error('Error fetching URL:', err.message);
  });
};

getRedirect('https://ibb.co/NgjwYFNq');
getRedirect('https://ibb.co/ccKXH6gH');
