include 'db.php';

$name = $_POST['name'];
$problem = $_POST['problem'];
$time = $_POST['time_slot'];

$stmt = $conn->prepare("INSERT INTO appointments (name, problem, time_slot) VALUES (?, ?, ?)");
$stmt->bind_param("sss", $name, $problem, $time);

if ($stmt->execute()) {
    echo "✅ Appointment booked!";
} else {
    echo "❌ Time slot already taken. Please choose another.";
}