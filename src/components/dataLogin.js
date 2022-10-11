import React, { useEffect, useState } from 'react'

export default function DataLogin(items) {

    const [getItems, setGetItems] = useState([])

    console.log( items )

    setGetItems( items )

    return getItems

}
