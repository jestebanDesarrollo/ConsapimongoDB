import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  ActivityIndicator,
  FlatList,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import axios from "axios";
export default function User() {
  // Estados
  const [isLoading, setLoading] = useState(true);
  const [idsearch, setIdsearch] = useState("");
  const [emailsearch, setEmailsearch] = useState("");
  const [username, setUserName] = useState("");
  const [fullname, setFullName] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState([]);
  // Metodos

  const flimpiar = () => {
    setUserName("");
    setFullName("");
    setEmail("");
    setPassword("");
    setRole("");
    setIdsearch("");
    setEmailsearch("");
  };
  const saveUser = async () => {
    if (
      !username.trim() ||
      !fullname.trim() ||
      (!email.trim() && !password.trim() && role.trim())
    ) {
      alert("Ingrese todos los datos");
      return;
    }
    //setLoading(true);
    try {
      const response = await axios.post(
        `https://back-end-verser.vercel.app/api/users`,
        {
          username,
          fullname,
          email,
          password,
          role,
        }
      );
      alert("Usuario agregado correctamente ...");
    } catch (error) {
      console.log(error);
    }
    /*finally {
      setLoading(false);
    }*/
  };

  const getUserByemail = async (email) => {
    try {
      const url = `https://back-end-verser.vercel.app/api/users/byemail/${email}`;
      const response = await axios.get(url);
      if (response.data.username != null) {
        setUserName(response.data.username);
        setFullName(response.data.fullname);
        setEmail(response.data.email);
        setRole(response.data.role);
        setIdsearch(response.data._id);
        setPassword(response.data.password);
      } else {
        alert("Usuario no encontrado");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  const getUserById = async (id) => {
    try {
      const url = `https://back-end-verser.vercel.app/api/users/${id}`;
      const response = await axios.get(url);
      if (response.data.username != null) {
        setUserName(response.data.username);
        setFullName(response.data.fullname);
        setEmail(response.data.email);
        setRole(response.data.role);
        setPassword(response.data.password);
        //setIdsearch(response.data._id);
      } else {
        alert("Usuario no encontrado");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const updateUser = async (id) => {
    if (
      !username.trim() ||
      !fullname.trim() ||
      (!email.trim() && !password.trim() && role.trim())
    ) {
      alert("Ingrese todos los datos");
      return;
    }
    //setLoading(true);
    try {
      const response = await axios.put(
        `https://back-end-verser.vercel.app/api/users/${id}`,
        {
          username,
          fullname,
          email,
          password,
          role,
        }
      );
      alert("Usuario Actualizado correctamente ...");
    } catch (error) {
      console.log(error);
      alert("Error al actualizar el usuario");
    }
    /*finally {
      setLoading(false);
    }*/
  };

  return (
    <View style={{ flex: 1, padding: 24 }}>
      <View>
        <TextInput
          style={styles.inputs}
          placeholder="Id del ususario a buscar"
          value={idsearch}
          onChangeText={(idsearch) => setIdsearch(idsearch)}
        />
        <TouchableOpacity
          style={[styles.buttons, { backgroundColor: "green" }]}
          onPress={() => getUserById(idsearch)}
        >
          <Text style={{ color: "white", fontSize: 22 }}>Buscar por id</Text>
        </TouchableOpacity>
        <TextInput
          style={styles.inputs}
          placeholder="email del usuario a buscar"
          value={emailsearch}
          onChangeText={(emailsearch) => setEmailsearch(emailsearch)}
        />
        <TouchableOpacity
          style={[styles.buttons, { backgroundColor: "grey" }]}
          onPress={() => getUserByemail(emailsearch)}
        >
          <Text style={{ color: "white", fontSize: 22 }}>Buscar por email</Text>
        </TouchableOpacity>
        <TextInput
          style={styles.inputs}
          placeholder="Usuario"
          value={username}
          onChangeText={(username) => setUserName(username)}
        />
        <TextInput
          style={styles.inputs}
          placeholder="Nombre Completo"
          value={fullname}
          onChangeText={(fullname) => setFullName(fullname)}
        />
        <TextInput
          style={styles.inputs}
          placeholder="Correo Electrónico"
          value={email}
          onChangeText={(email) => setEmail(email)}
        />
        <TextInput
          style={styles.inputs}
          placeholder="Contraseña"
          secureTextEntry={true} // para que no me deje visualizar las constraseñas. se puede poner sin darle un valor.
          value={password}
          onChangeText={(password) => setPassword(password)}
        />
        <TextInput
          style={styles.inputs}
          placeholder="Rol o Función"
          value={role}
          onChangeText={(role) => setRole(role)}
        />
      </View>
      <TouchableOpacity
        style={[styles.buttons, { backgroundColor: "green" }]}
        onPress={() => saveUser()}
      >
        <Text style={{ color: "white", fontSize: 22 }}>Guardar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.buttons, { backgroundColor: "blue" }]}
        onPress={() => updateUser(idsearch)}
      >
        <Text style={{ color: "white", fontSize: 22 }}>Actualizar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.buttons, { backgroundColor: "green" }]}
        onPress={() => flimpiar()}
      >
        <Text style={{ color: "white", fontSize: 22 }}>Limpiar</Text>
      </TouchableOpacity>
      
      <TouchableOpacity
        style={[styles.buttons, { backgroundColor: "yellow" }]}
        onPress={() => navigator.navigate("ListUser")}
      >
        <Text style={{ color: "white", fontSize: 22 }}>Listar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  buttons: {
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
    height: 50,
    justifyContent: "center",
  },
  inputs: {
    borderRadius: 8,
    textAlign: "center",
    height: 40,
    borderWidth: 2,
    borderColor: "green",
    marginTop: 5,
  },
});
