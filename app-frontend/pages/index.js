import Head from "next/head"
import * as React from "react"
//ßimport  {BrowserRouter, Route, Routes} from "react-router-dom"
import { ModalForm } from "../components/ModalForm"
import { ModalForm2 } from "../components/ModalForm2"
import { ModalForm3 } from "../components/ModalForm3"
import { OpenModalButton } from "../components/OpenModalButton"
//import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom"

import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

const Stack = createNativeStackNavigator()

export default function Home() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name="Home"
					component={OpenModalButton}
					//options={{ title: 'Welcome' }}
				/>
				<Stack.Screen
					name="Step1"
					component={ModalForm}
				/>
				<Stack.Screen
					name="Step2"
					component={ModalForm2}
				/>
				<Stack.Screen
					name="Step3"
					component={ModalForm3}
				/>
			</Stack.Navigator>
		</NavigationContainer>

		// 	// <div className="flex flex-col items-center justify-center min-h-screen py-2">
		// 	// 	<Head>
		// 	// 		<title>Frontend Boilerplate React</title>
		// 	// 		<link
		// 	// 			rel="icon"
		// 	// 			href="/favicon.ico"
		// 	// 		/>
		// 	// </Head>
		// 		{/* <OpenModalButton/> */}
		// 		{/* <BrowserRouter>
		// 			<Routes>
		// 				<Route
		// 					exact
		// 					path="/form"
		// 					element={<OpenModalButton />}
		// 				/>
		// 				<Route
		// 					path="/step1"
		// 					element={<ModalForm />}
		// 				/>
		// 				<Route
		// 					path="/step2"
		// 					element={<ModalForm2 />}
		// 				/>
		// 				<Route
		// 					path="/step3"
		// 					element={<ModalForm3 />}
		// 				/>
		// 			</Routes>
		// 		</BrowserRouter> */}
		// //	</div>
	)
}
