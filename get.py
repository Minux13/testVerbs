from selenium import webdriver
from selenium.webdriver.common.keys import Keys

driver = webdriver.Firefox()
driver.get("http://conjugador.reverso.net/conjugacion-ingles-verbo-tear.html")
#assert "Python" in driver.title
elem = driver.find_element_by_class_name('verb-forms-wrap')
print(elem.text)
#elem.clear()
#elem.send_keys("pycon")
#elem.send_keys(Keys.RETURN)
assert "No results found." not in driver.page_source
driver.close()
