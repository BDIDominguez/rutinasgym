import tkinter as tk
from tkinter import ttk
import json

# Función para cargar los datos del archivo JSON
def cargar_datos_json():
    with open('rutinas.json', 'r') as file:
        return json.load(file)

# Función para mostrar los detalles del ejercicio seleccionado en los Entry
def mostrar_detalles(event):
    selected_item = tree.focus()
    datos = tree.item(selected_item)['values']
    
    if datos:
        entry_id.delete(0, tk.END)
        entry_id.insert(0, datos[0])

        entry_nombre.delete(0, tk.END)
        entry_nombre.insert(0, datos[1])

        entry_series.delete(0, tk.END)
        entry_series.insert(0, datos[2])

        entry_repeticiones.delete(0, tk.END)
        entry_repeticiones.insert(0, datos[3])

# Función para actualizar los datos en el JSON (simulación)
def actualizar_datos():
    selected_item = tree.focus()
    datos_actualizados = {
        "id": entry_id.get(),
        "nombre": entry_nombre.get(),
        "series": entry_series.get(),
        "repeticiones": entry_repeticiones.get()
    }

    # Aquí actualizarías el archivo JSON o tu estructura de datos
    print("Datos actualizados:", datos_actualizados)

# Crear ventana principal
root = tk.Tk()
root.title("Editor de Ejercicios")
root.geometry("400x500")

# Crear un Treeview para mostrar los datos en formato de tabla
tree = ttk.Treeview(root, columns=('ID', 'Nombre', 'Series', 'Repeticiones'), show='headings')
tree.heading('ID', text='ID')
tree.heading('Nombre', text='Nombre')
tree.heading('Series', text='Series')
tree.heading('Repeticiones', text='Repeticiones')

# Ajustar el tamaño de las columnas
tree.column('ID', width=50)
tree.column('Nombre', width=200)
tree.column('Series', width=100)
tree.column('Repeticiones', width=100)

# Colocar el Treeview en la ventana
tree.pack(pady=20)

# Cargar los datos desde el archivo JSON y mostrarlos en el Treeview
datos = cargar_datos_json()
for item in datos:
    tree.insert('', tk.END, values=(item['id'], item['nombre'], item['series'], item['repeticiones']))

# Detectar cuando se selecciona una fila en el Treeview
tree.bind('<<TreeviewSelect>>', mostrar_detalles)

# Crear los Entry para mostrar y editar los datos de la fila seleccionada
frame = tk.Frame(root)
frame.pack(pady=10)

tk.Label(frame, text="ID").grid(row=0, column=0)
entry_id = tk.Entry(frame)
entry_id.grid(row=0, column=1, padx=10)

tk.Label(frame, text="Nombre").grid(row=1, column=0)
entry_nombre = tk.Entry(frame)
entry_nombre.grid(row=1, column=1, padx=10)

tk.Label(frame, text="Series").grid(row=2, column=0)
entry_series = tk.Entry(frame)
entry_series.grid(row=2, column=1, padx=10)

tk.Label(frame, text="Repeticiones").grid(row=3, column=0)
entry_repeticiones = tk.Entry(frame)
entry_repeticiones.grid(row=3, column=1, padx=10)

# Botón para actualizar los datos
btn_actualizar = tk.Button(root, text="Actualizar Datos", command=actualizar_datos)
btn_actualizar.pack(pady=10)

root.mainloop()
