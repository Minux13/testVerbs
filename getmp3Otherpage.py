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

words = [		
"hit",		
"become", 	
"fit",		
"split",	
"let", 	
"set",		
"spread",	
"put",		
"cut",		
"shut",	
"thrust",	
"hurt",	
"burst",	
"cast",	
"broadcast",	
"forecast",	
"cost",	
"beat",	
"sweat",	
"bet",		
"wet",		
"bid",		
"rid",		
"slit",	
"quit"
]


urlMp3 = 'https://www.linguasorb.com/speech/en/wind'	
responsemp3 = urllib2.urlopen( urlMp3 )
html2 = responsemp3.read()
open( 'wind.mp3', 'wb').write(html2)



""""
for word in words:
	urlMp3 = 'https://www.linguasorb.com/speech/en/' + word	
	responsemp3 = urllib2.urlopen( urlMp3 )
	html2 = responsemp3.read()
	open( 'linguasorb/' + word + '.mp3', 'wb').write(html2)

"""
