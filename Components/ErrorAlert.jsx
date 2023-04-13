import react from "react";
import Alert from "react-bootstrap/Alert";

const AppElert = () => {
return (
	<div>
	<Alert variant="success" style={{ width: "42rem" }}>
		<Alert.Heading>
		This is a success alert which has green background
		</Alert.Heading>
	</Alert>

	<Alert variant="secondary" style={{ width: "42rem" }}>
		<Alert.Heading>
		This is a secondary alert which has grey background
		</Alert.Heading>
	</Alert>

	<Alert variant="primary" style={{ width: "42rem" }}>
		<Alert.Heading>
		This is a primary alert which has blue background
		</Alert.Heading>
	</Alert>

	<Alert variant="danger" style={{ width: "42rem" }}>
		<Alert.Heading>
		This is a danger alert which has red background
		</Alert.Heading>
	</Alert>

	<Alert variant="warning" style={{ width: "42rem" }}>
		<Alert.Heading>
		This is a warning alert which has yellow background
		</Alert.Heading>
	</Alert>

	<Alert variant="light" style={{ width: "42rem" }}>
		<Alert.Heading>
		This is a light alert which has white background
		</Alert.Heading>
	</Alert>

	<Alert variant="dark" style={{ width: "42rem" }}>
		<Alert.Heading>
		This is a dark alert which has dark grey background
		</Alert.Heading>
	</Alert>

	<Alert variant="info" style={{ width: "42rem" }}>
		<Alert.Heading>
		This is a info alert which has light blue background
		</Alert.Heading>
	</Alert>
	</div>
);
};

export default AppElert;
