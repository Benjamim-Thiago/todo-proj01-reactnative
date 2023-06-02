import React, { useState } from 'react';
import { Alert, FlatList, Image, SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { styles } from './styles';
import { Amount } from '../../components/TodoAmount';
import { ItemTodo } from '../../components/List';

export function Home() {
  type Todo = {
    id: number,
    description: string,
    concluded: boolean
  }
  const [todos, setTodos] = useState<Todo[]>([])
  const [description, setDescription] = useState('')
  const [concluded, setConcluded] = useState(false)
  
  function handlerAdd() {
    if(description.length === 0) {
      return Alert.alert('Campo vazio', 'Preencha o nome da tarefa.')
    }
    const newTodo: Todo = {
      id: todos.length + 1,
      description: description,
      concluded: concluded,
    };

    todos.push(newTodo)

    setTodos(todos)
    setDescription('')
    setConcluded(false)     
  }

  function handlerChecked(item: Todo) {
    const updateTodos = todos.map((value) => {
      if(value.id === item.id) {
        const result = !item.concluded
        setConcluded(result)
        return { ...value, concluded: result };
      }
      return value;
    });

    setTodos(updateTodos)
  }
  function handlerRemove(item: Todo) {
    Alert.alert('Remover', `Deseja realmente remover ${item.description}?`, [
      {
        text: 'Sim',
        onPress: () => setTodos(todos.filter((i) => i.id !== item.id))
      },
      {
        text: "Não",
        style: 'cancel'
      }
    ] )
  }

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Image 
        source={require('../../../assets/logo.png')}  
        style={styles.logo} />
      </View>
      <View style={styles.form}>
        <TextInput 
          placeholder='Digite o nome da tarefa' 
          placeholderTextColor='#6B6B6B' 
          style={styles.input}
          onChangeText={setDescription}
          value={description} />
        <TouchableOpacity style={styles.button} onPress={handlerAdd}>
          <Text style={styles.buttonText}>
            <Image source={require('../../../assets/plus.png')} />
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.body}>
        <Amount  
          created = {todos.length} 
          concluded = {todos.filter((item) => item.concluded === true).length} />
        <SafeAreaView style={{flex: 1}}>
          <FlatList 
            data={todos} 
            renderItem={({ item }) =>           
            <ItemTodo 
              key={item.id} 
              description = {item.description} 
              concluded = {item.concluded} 
              onChecked = {() => handlerChecked(item)}
              onRemove={() => handlerRemove(item)} />
          }
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (
            <View style={styles.emptyList}>
              <Image source={require('../../../assets/empty-list.png')} />
              <Text style={styles.textEmptyListBold}>
                Você ainda não tem tarefas cadastradas
              </Text>
              <Text style={styles.textEmptyList}>
                Crie tarefas e organize seus itens a fazer
              </Text>
            </View>
          )}
          />
        </SafeAreaView>
      </View>
    </View>
  )
}