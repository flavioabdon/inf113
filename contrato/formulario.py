#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
Ver 0.1 Formulario de contrato automatizado. 

Vamos a tener que introducir ciertos criterios para poder rellenar de manera automatica los archivos .tex con la informaci'on que nos interesa 

""" 
# PRIMERO 
# Definimos que tipo de contrato es, por default será en contrato general.  
"""
print("Debe introducir un número entre 0 y 3." )
print("0 = Contrato estándar") 
print("1 = Contrato sin luz" )
print("2 = Contrato sin luz ni garantía" )
tipo_doc = input("El contrato es de tipo: ")
try: 
	int((tipo_doc))
	if int(tipo_doc) == 0:
		print("Eligio tipo de contrato estandar")
	elif int(tipo_doc) == 1:
		print("Eligio tipo de contrato sin luz")
	elif int(tipo_doc) == 2:
		print("Eligio tipo de contrato sin luz ni garantia")

except ValueError: 
	print("estas haciendo algo mal")
"""
import os
from datetime import datetime, time, timedelta, date
import calendar


# Transforma los numeros a su extención literal mas los 00/100 si es necesesario
def numbers_to_letters(numero):
	indicador = [("",""),("mil","mil"),("millon","millones"),("mil","mil"),("billon","billones")]
	entero = int(numero)
	decimal = int(round((numero - entero)*100))
	#print 'decimal : ',decimal 
	contador = 0
	numero_letras = ""
	while entero >0:
		a = entero % 1000
		if contador == 0:
			en_letras = convierte_cifra(a,1).strip()
		else :
			en_letras = convierte_cifra(a,0).strip()
		if a==0:
			numero_letras = en_letras+" "+numero_letras
		elif a==1:
			if contador in (1,3):
				numero_letras = indicador[contador][0]+" "+numero_letras
			else:
				numero_letras = en_letras+" "+indicador[contador][0]+" "+numero_letras
		else:
			numero_letras = en_letras+" "+indicador[contador][1]+" "+numero_letras
		numero_letras = numero_letras.strip()
		contador = contador + 1
		entero = int(entero / 1000)
	numero_letras = numero_letras + " "+ str(decimal) +"/100"
	#print ('numero: ',numero)
	#print (numero_letras.capitalize())
	return (numero_letras.capitalize())
	
def convierte_cifra(numero,sw):
	lista_centana = ["",("cien","ciento"),"doscientos","trescientos","cuatrocientos","quinientos","seiscientos","setecientos","ochocientos","novecientos"]
	lista_decena = ["",("diez","once","doce","TRECE","CATORCE","QUINCE","DIECISEIS","DIECISIETE","DIECIOCHO","DIECINUEVE"),
					("VEINTE","VEINTI"),("TREINTA","TREINTA Y "),("CUARENTA" , "CUARENTA Y "),
					("CINCUENTA" , "CINCUENTA Y "),("SESENTA" , "SESENTA Y "),
					("SETENTA" , "SETENTA Y "),("OCHENTA" , "OCHENTA Y "),
					("NOVENTA" , "NOVENTA Y ")]
	lista_unidad = ["",("UN" , "UNO"),"DOS","TRES","CUATRO","CINCO","SEIS","SIETE","OCHO","NUEVE"]
	centena = int (numero / 100)
	decena = int((numero -(centena * 100))/10)
	unidad = int(numero - (centena * 100 + decena * 10))
	#print "centena: ",centena, "decena: ",decena,'unidad: ',unidad
	texto_centena = ""
	texto_decena = ""
	texto_unidad = ""
	#Validad las centenas
	texto_centena = lista_centana[centena]
	if centena == 1:
		if (decena + unidad)!=0:
			texto_centena = texto_centena[1]
		else :
	 		texto_centena = texto_centena[0]
	#Valida las decenas
	texto_decena = lista_decena[decena]
	if decena == 1 :
		 texto_decena = texto_decena[unidad]
	elif decena > 1:
		if unidad != 0 :
			texto_decena = texto_decena[1]
		else:
			texto_decena = texto_decena[0]
 	#Validar las unidades
 	#print "texto_unidad: ",texto_unidad
	if decena != 1:
		texto_unidad = lista_unidad[unidad]
		if unidad == 1:
			texto_unidad = texto_unidad[sw]
	return "%s %s %s" %(texto_centena,texto_decena,texto_unidad)

def moth_to_letters(x):
    return {
        1: "Enero",
        2: "Febrero",
        3: "Marzo",
        4: "Abril",
        5: "Mayo",
        6: "Junio",
        7: "Julio",
        8: "Agosto",
        9: "Septiembre",
        10: "Octubre",
        11: "Noviembre",
        12: "Diciembre"
    }.get(x, "ERROR") 


#transformar A expresion literal la fecha x 
def fechaFinalLiteral(x1):
	lday = str(convierte_cifra(x1.day,0))
	lmonth = str(moth_to_letters(x1.month))
	lyear = numbers_to_letters(x1.year)[:-5]	
	if x1.day >1:
		print("%s días del mes de %s del los %s años" % (lday.lower(),lmonth.lower(),lyear.lower()))
		return ("%s días del mes de %s del los %s años" % (lday.lower(),lmonth.lower(),lyear.lower()))
	else: 
		print("%s día del mes de %s del los %s años" % (lday.lower(),lmonth.lower(),lyear.lower()))
		return ("%s día del mes de %s del los %s años" % (lday.lower(),lmonth.lower(),lyear.lower()))



#############################################
### LECTURA DE VARIABLES - ALQUILER #########
#############################################

contrato = open('contract.txt','r+')
lines = contrato.readlines()
contrato.close()


new_lines = []

# Donde esta el ambiente 
os.system("clear")
print('¿El ambiente está en la primera planta o planta baja?')
print("0 = planta baja")
print("1 = primera planta") 
piso = input()
if piso ==0:
	line_12 = "\\newcommand{\piso}{%s }" % ("planta baja")
else: 
	line_12 = "\\newcommand{\piso}{%s }" % ("primera planta")
new_lines.append(line_12)

# Que numero de ambiente es
ambiente = input("Numero de ambiente: ")
line_13 = "\\newcommand{\\numambiente}{%s }" % (ambiente)
new_lines.append(line_13)
# El inquilino/a es hombre o mujer 
sexo = input("0 para hombre, 1 para mujer:  ")
if int(sexo) == 0: 
	line_14 = "\\newcommand{\hommuj}{ INQUILINO}"
	line_15 = "\\newcommand{\srsra}{al Sr. }"
	new_lines.append(line_14)
	new_lines.append(line_15)
elif int(sexo) ==1: 
	
	line_14 = "\\newcommand{\hommuj}{ INQUILINA}"
	line_15 = "\\newcommand{\srsra}{a la Sra. }" 
	new_lines.append(line_14)
	new_lines.append(line_15)

# Nombre completo
nombre = input("Nombre completo del inquilino/a: ")
line_16 = "\\newcommand{\\nombreinquilino}{%s }" % (nombre)
new_lines.append(line_16)

# carnet de identidad 
ci = input("CI más extención: ")
line_17 = "\\newcommand{\ci}{%s }" % (ci)
new_lines.append(line_17)

# Cuanto es el alquiler 
alquiler = int(input("De cuanto es el alquiler? \n (Número): "))
alquilerLit = numbers_to_letters(alquiler)
print(alquilerLit)
line_18 = "\\newcommand{\\alquiler}{%s (%s}" % (alquiler,alquilerLit)
new_lines.append(line_18)
print(line_18)


#tiempos
#os.system("clear")
print("Cuanto tiempo durará el contrato: ")
print("[A]ños \t [a]ño \n [M]eses \t [m]es \n [D]ías \t [d]ía")
uniMed = str(input("Unidad de Medida: "))
duracion = int(input("Frecuencia: "))

def medida(x):
	return {
		"A": "años",
		"a": "año",
		'M': "meses",
		'm': "mes", 
		'D': "días",
		'd': "día"
		}.get(x,"ERROR")
uniMed = medida(uniMed)
line_19 = "\\newcommand{\\tiempo}{%s %s calendario }" % (duracion, uniMed)
new_lines.append(line_19)
print(line_19)


# control de fechas
print("En qué fecha inicia el plazo del contrato: \n d/m/y")
fechaini=input()
fechaini= [int(i) for i in fechaini.split("/")]
fechaini=date(fechaini[2],fechaini[1],fechaini[0])
fechainiLit = "%s de %s de %s " % (fechaini.day, moth_to_letters(fechaini.month),fechaini.year) 

line_20 = "\\newcommand{\\fechaini}{%s}" % (fechainiLit)
new_lines.append(line_20)
print(line_20)


#fecha de culminacion

delta= int(input("Variacion en días: "))
fechafin = fechaini + timedelta(days=delta)
fechafinlit = "%s de %s de %s " % (fechafin.day, moth_to_letters(fechafin.month),fechafin.year) 
line_21 = "\\newcommand{\\fechafin}{%s}" % (fechafinlit)
new_lines.append(line_21)
print(line_21)


#Uso del ambiente.
uso = input("Para que se utilizara el deposito: ")
line_22 = "\\newcommand{\\usosambiente}{%s}" % (uso)
new_lines.append(line_22)


#luz
luz = int(input("Cuanto se cobra de la luz: \n (Número): "))
luzLit = numbers_to_letters(luz)
line_23 = "\\newcommand{\luz}{%s (%s }" % (luz, luzLit)
new_lines.append(line_23)
print(line_23)


garantia = int(input("Monto de la garantia: \n "))
garantiaLit = numbers_to_letters(garantia)
line_24 = "\\newcommand{\garantia}{%s (%s}" % (garantia, garantiaLit)
new_lines.append(line_24)
print(line_24)


#fecha final de firma
print("Introducir la fecha de la firma del contrato: \n d/m/y \n ")
fechafir=input()
fechafir= [int(i) for i in fechafir.split("/")]
fechafir=date(fechafir[2],fechafir[1],fechafir[0])
fechalit = fechaFinalLiteral(fechafir)
line_25 = "\\newcommand{\\fechalit}{%s}" % (fechalit)
new_lines.append(line_25)
print(line_25)


fechapie = "%s de %s de %s " % (fechafir.day, moth_to_letters(fechafir.month),fechafir.year) 
line_26 = "\\newcommand{\\fechafir}{%s}" % (fechapie)
new_lines.append(line_26)
print(line_26)


#generando nuevo documento
new_document = []
for i in range(11):
	new_document.append(lines[i])
for line in new_lines: 
	new_document.append("%s \n" % (line))
for j in lines[26:]:
	new_document.append(j)

# Guardandolo para la impresion 

log = open('log.txt','r+')
log_lst = log.readlines()
for i in log_lst: 
	log.write('%s ' % i)
print(log_lst)
for i in new_lines:
	log.write('%s ' % (i))
log.close()

# Guardando para la impresion
output = open('contrato.tex','w+')
for line in new_document:
	output.write('%s' % (line)) 
output.close()


# compliando el documento 
os.system("pdflatex contrato.tex")