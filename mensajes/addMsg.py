import pymysql

##Estableciendo conexion
conn = pymysql.connect(host='localhost', user='root', password='123456',db='alquileres')
cur = conn.cursor()

contacto= input("Contacto al que quiere enviar el mensaje: ")
mensaje = input("Mensaje que quiere enviar: " )

cur.execute('INSERT INTO messages VALUES (\'%s\',\'%s\',\'0\');' % (contacto, mensaje))
conn.commit()
