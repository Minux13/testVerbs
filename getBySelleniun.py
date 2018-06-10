from selenium import webdriver
from selenium.webdriver.chrome.options import Options
driver = webdriver.Chrome()
driver.get("http://conjugador.reverso.net/conjugacion-ingles-verbo-place.html")
#assert "Python" in driver.title
elem = driver.find_element_by_id("ch_lblVerb")

print(elem)

driver.close()
