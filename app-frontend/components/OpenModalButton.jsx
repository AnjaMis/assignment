import { ModalForm } from "./ModalForm"
//import { NavigationContainer } from "@react-navigation/native"
//import { createNativeStackNavigator } from "@react-navigation/native-stack"
//import { useNavigate } from "react-router-dom"

export default function OpenModalButton({ navigation }) {
	return (
		<div id="root">
			<div
				class="w-full flex justify-center py-12"
				id="button"
			>
				<button
					class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 mx-auto transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-4 sm:px-8 py-2 text-xs sm:text-sm"
					onclick={() => navigation.navigate("Step1")}
				>
					Open Modal
				</button>
			</div>
		</div>
	)
}
