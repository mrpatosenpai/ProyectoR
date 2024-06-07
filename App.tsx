import React,{useState} from "react";
import { View,Text,TextInput,TouchableOpacity,StyleSheet, Dimensions } from "react-native";

const dibujar= StyleSheet.create({
  contenedor:{
    width:' 100%',
    padding: 20
  },
  titulo:{
    fontSize:20,
    color:'#6f6f6f'
  },
  textinput:{
    borderColor:'#6f6f6f',
    borderWidth:1,
    borderRadius:15,
    width:Dimensions.get("screen").width*0.6,
    paddingLeft:"0.025%"
  },
  text:{
    fontSize:16,
    color:'#6f6f6f'
  },
  wtext:{
    fontSize:16,
    color:'#fff'
  },
  inputcontenedor:{
    marginTop:20,
    flexDirection:"row",
    justifyContent:"space-between"
  },
  button:{
    width:Dimensions.get("screen").width*0.25,
    backgroundColor:'blue',
    justifyContent:'center',
    borderRadius:15
  }
})
const tareas =[
]

export interface Task{
  titulo:string,
  estado:Boolean,
  fecha:Date
}

export default function App(){
  const[text, setText]=useState('')
  const [tareas, setTask]=useState<Task[]>([])
  const addTask=()=>{
    const tmp =[...tareas]
    const newTask={
      titulo:text,
      estado:false,
      fecha:new Date()
    }
    tmp.push(newTask)
    setTask(tmp)
    setText('')
  }
  const markDone=(tarea:Task)=>{
    const tmp = [...tareas]
    const index=tmp.findIndex(k=>k.titulo===tarea.titulo)
    const t=tmp[index]
    t.estado=! t.estado
    setTask(tmp)
  }
  return(
    <View style={dibujar.contenedor}>
      <Text>
        Hola pendejo
      </Text>
      <View style={dibujar.inputcontenedor}>
      <TextInput placeholder="Agregar"
      value={text}
      onChangeText={(t:string)=>setText(t)}
      />
      <TouchableOpacity style={dibujar.button}
      onPress={addTask}>
        <Text style={dibujar.wtext}>
          Enviar
        </Text>
      </TouchableOpacity>
    </View>
    </View>
 
    
  )
};


