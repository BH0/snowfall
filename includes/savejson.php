<?php
if (isset($_POST['fallSpeed'])) {
	$fp = fopen("options.json", "a+");
	fwrite($fp, json_encode($_POST['fallSpeed']));
	fwrite($fp, json_encode($_POST['width']));
	fwrite($fp, json_encode($_POST['rate']));
	fclose($fp);
	echo "Sent";
} else {
	echo "Issue with sending";
}

/*
if (isset($_POST['name'])) {
	$fp = fopen('../options.json', 'w');
	fwrite($fp, json_encode($_POST['name']));
	fclose($fp);
	echo "Sent";
} else {
	echo "issue";
}
*/
?>
