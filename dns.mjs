import dns from "dns/promises";

const web = await dns.lookup('www.dicoding.com')

console.info(web.address);
console.info(web.family);