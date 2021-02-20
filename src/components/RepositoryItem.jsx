import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import TheText from './Text'


const styles = StyleSheet.create({
    container: {
      paddingTop: 50,
    },
    tinyLogo: {
      width: 50,
      height: 50,
    },
    logo: {
      width: 66,
      height: 58,
    },
    programmingLanguage: {
        width: 50,
        height: 50,
        color: 'white',
        backgroundColor: '#0366d6',
        borderRadius: 5,
        marginLeft: 20
    }
  })



const divider = (number) => {
    return number > 1000 ? (number / 1000).toFixed(1) : number
} 

const RepositoryItem = ( item ) => {
    return (
        <View>
            <Image
        style={styles.tinyLogo}
        source={{uri: item.ownerAvatarUrl}}
      />
            <Text>{item.fullName}</Text>
            <Text>{item.description}</Text>
            <Text style={styles.programmingLanguage}>{item.language}</Text>
            <Text>{divider(item.forksCount)}k</Text>
            <Text>{divider(item.stargazersCount)}k</Text>
            <Text>{item.ratingAverage}</Text>
            <Text>{item.reviewCount}</Text>
        </View>
    )
}

export default RepositoryItem;