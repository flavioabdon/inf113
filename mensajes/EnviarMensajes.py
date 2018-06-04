from selenium import webdriver
from time import gmtime, strftime
import random
import time
import pymysql


def sendMsg(name,msg):
  search = driver.find_element_by_class_name('jN-F5')
  search.click()
  search.clear()
  for i in name:
    search.send_keys(i)
    time.sleep(0.1)
  time.sleep(4)
  user = driver.find_element_by_xpath('//span[@title = "{}"]'.format(name))
  user.click()

  msg_box = driver.find_element_by_class_name('_2S1VP')

  for i in msg:
    msg_box.send_keys(i)
    time.sleep(0.1)

  button = driver.find_element_by_class_name('_2lkdt')
  button.click()

def timeNoC():
  return strftime("%H", gmtime()) + " horas, " + strftime("%M", gmtime()) + " minutos, " + strftime("%S", gmtime()) + " segundos, inclinación " + strftime("%d", gmtime())  + " grados  ...... no hay cuerpos. "


driver = webdriver.Chrome()
driver.get('https://web.whatsapp.com/')

input('Presione enter una vez se ha escaneado en código QR')

## Desarrollo del programa
while(True):
  print(timeNoC())
  conn = pymysql.connect(host='localhost', user='root', password='123456',db='alquileres')
  cur = conn.cursor()
  cur.execute('SELECT * FROM messages WHERE status = \'0\'')
  data = cur.fetchall()
  if(len(data)>0): 
    for i in data:
      sendMsg(i[0],i[1])
      time.sleep(2)
    cur.execute('UPDATE messages SET status = \'1\' WHERE status = \'0\'')
    conn.commit()
  else:
    sendMsg('Block de notas',timeNoC())
  conn.close()
  t = random.randint(30,180)
  print(t)
  time.sleep(t)