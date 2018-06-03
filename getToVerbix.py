import urllib2,cookielib
from pyquery import PyQuery 

site= "http://conjugador.reverso.net/conjugacion-ingles-verbo-harm.html"
hdr = {'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.11 (KHTML, like Gecko) Chrome/23.0.1271.64 Safari/537.11',
       'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
       'Accept-Charset': 'ISO-8859-1,utf-8;q=0.7,*;q=0.3',
       'Accept-Encoding': 'none',
       'Accept-Language': 'en-US,en;q=0.8',
       'Connection': 'keep-alive'}

req = urllib2.Request(site, headers=hdr)

try:
    page = urllib2.urlopen(req)
except urllib2.HTTPError, e:
    print e.fp.read()

content = page.read()


pq = PyQuery(content)
tag = pq('.word-translated-wrap')
#elem = tag.eq(1)

print tag

#noremap o 0i"<Esc>ea"<Esc>Ja"<Esc>ea"<Esc>Ja"<Esc>ea"<Esc>Ja"<Esc>$a"<Esc>j 
#noremap o 05f"ls<tab><Esc>j 
