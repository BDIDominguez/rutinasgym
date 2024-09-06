import tkinter as tk
from tkinter import messagebox, filedialog
import json

# Función para cargar un archivo JSON
def cargar_json():
    ruta_archivo = filedialog.askopenfilename(title="Abrir archivo JSON", filetypes=(("Archivos JSON", "*.json"),))
    if ruta_archivo:
        with open(ruta_archivo, 'r', encoding='utf-8') as archivo:
            datos = json.load(archivo)
            # Mostramos los datos en el cuadro de texto
            text_area.delete(1.0, tk.END)
            text_area.insert(tk.END, json.dumps(datos, indent=4))

# Función para guardar los cambios en el archivo JSON
def guardar_json():
    ruta_archivo = filedialog.asksaveasfilename(defaultextension=".json", filetypes=(("Archivos JSON", "*.json"),))
    if ruta_archivo:
        try:
            datos = json.loads(text_area.get(1.0, tk.END))
            with open(ruta_archivo, 'w', encoding='utf-8') as archivo:
                json.dump(datos, archivo, indent=4)
            messagebox.showinfo("Éxito", "Archivo guardado correctamente")
        except json.JSONDecodeError:
            messagebox.showerror("Error", "El formato JSON es incorrecto.")

# Crear la ventana principal
root = tk.Tk()
root.title("Editor de JSON")

# Crear botones y cuadro de texto
btn_cargar = tk.Button(root, text="Cargar JSON", command=cargar_json)
btn_guardar = tk.Button(root, text="Guardar JSON", command=guardar_json)

text_area = tk.Text(root, wrap=tk.NONE, width=80, height=20)
scroll = tk.Scrollbar(root, command=text_area.yview)
text_area.config(yscrollcommand=scroll.set)

# Posicionar los elementos en la ventana
btn_cargar.pack(pady=10)
btn_guardar.pack(pady=10)
scroll.pack(side=tk.RIGHT, fill=tk.Y)
text_area.pack(padx=10, pady=10)

# Iniciar el bucle principal de la ventana
root.mainloop()
