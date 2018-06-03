"""from BeautifulSoup import BeautifulSoup
import urllib2
 
 
# get the contents
response = urllib2.urlopen('https://dictionary.cambridge.org/es/diccionario/ingles-espanol/slink')
html = response.read()
 
parsed_html = BeautifulSoup(html)
padre = parsed_html.body.find('span', attrs={'class':'pron-info'})
medio = padre.find('span', attrs={'class':'us'})
print(medio)"""


from pyquery import PyQuery    
import urllib2
#program, spell, shop
words = [		
"thank",	
"land",	
"film",	
"shout",	
"wrestle",	
"pass",	
"perform",	
"stop",	
"ski",		
"pamper",	
"start",	
"link",	
"repeat",	
"park",	
"save",	
"learn",	
"exhibit",	           
"harm",	
"grant",	
"decrease"
]

for word in words:
	urldic = 'https://dictionary.cambridge.org/es/diccionario/ingles-espanol/' + word
	responsedic = urllib2.urlopen(urldic)
	htmlDic = responsedic.read()
	pq = PyQuery(htmlDic)
	tag = pq('.pron-info .us')
	elem = tag.eq(1)
	
	urlMp3 = elem.attr("data-src-mp3")
	print(urlMp3)
	responsemp3 = urllib2.urlopen( urlMp3 )
	html2 = responsemp3.read()
	open( 'cambridgeRV/' + word + '.mp3', 'wb').write(html2)

"""
response = urllib2.urlopen('https://dictionary.cambridge.org/es/diccionario/ingles-espanol/slink')
 
html = response.read()
pq = PyQuery(html)
tag = pq('.pron-info .us')

elem = tag.eq(1)

url = elem.attr("data-src-mp3")
print url

responsemp3 = urllib2.urlopen( url )
html2 = responsemp3.read()
open('algo.mp3', 'wb').write(html2)
"""
# print the text of the div
#print tag.text()
 
# print the html of the div
#print tag.html()
