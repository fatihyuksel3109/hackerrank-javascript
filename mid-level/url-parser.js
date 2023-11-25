/**
 * URL Parser
 * 
 * Problem:
 * Given a URL, this function parses it into its components (protocol, host, path, etc.).
 * 
 * Constraints:
 * - The input URL should be a valid URL string.
 * 
 */

function parseURL(urlString) {
    try {
      const url = new URL(urlString);
  
      // Extract components from the URL object
      const parsedURL = {
        protocol: url.protocol,
        host: url.host,
        hostname: url.hostname,
        port: url.port,
        path: url.pathname,
        search: url.search,
        hash: url.hash,
        username: url.username,
        password: url.password,
        origin: url.origin,
      };
  
      return parsedURL;
    } catch (error) {
      // Handle invalid URL
      console.error('Invalid URL:', error.message);
      return null;
    }
  }
  
  // Example usage:
  const url = 'https://www.example.com:8080/path/to/resource?query=param#section';
  const parsedURL = parseURL(url);
  
  if (parsedURL) {
    console.log(parsedURL);
  }
  