from pyquery import PyQuery    
import urllib2

words = [	
"send"
]

urldic = 'http://conjugador.reverso.net/conjugacion-ingles-verbo-waste.html'
responsedic = urllib2.urlopen(urldic)
htmlDic = responsedic.read()
pq = PyQuery(htmlDic)	#$(".word-translated-wrap")[0].children[1].innerHTML
tag = pq('.word-translated-wrap .context-term')
#elem = tag.eq(0)
print( tag )
print( pq )

"""
for word in words:
	urldic = 'http://conjugador.reverso.net/conjugacion-ingles-verbo-' + word + '.html'
	responsedic = urllib2.urlopen(urldic)
	htmlDic = responsedic.read()
	pq = PyQuery(htmlDic)	#$(".word-translated-wrap")[0].children[1].innerHTML
	tag = pq('.word-translated-wrap .context-term')
	#elem = tag.eq(0)
	
	print( pq )
	
	""
	urlMp3 = elem.attr("data-src-mp3")
	print(urlMp3)
	responsemp3 = urllib2.urlopen( urlMp3 )
	html2 = responsemp3.read()
	open( word + '.mp3', 'wb').write(html2)
	"""
