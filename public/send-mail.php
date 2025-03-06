
<?php
// Заголовки для предотвращения CORS-ошибок
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Проверка метода запроса
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    // Если это preflight-запрос, просто вернуть заголовки
    exit(0);
}

// Получение данных из POST-запроса
$inputData = json_decode(file_get_contents('php://input'), true);

// Проверяем, определен ли JSON и является ли он массивом
if (!$inputData || !is_array($inputData)) {
    // Попробуем получить данные из обычного POST-запроса
    $inputData = $_POST;
}

// Установка получателя
$to = 'barm.70@gmail.com';

// Определение типа формы по наличию определенных полей
if (isset($inputData['selectedService'])) {
    // Это форма заказа персонала
    $subject = 'Новый заказ персонала с сайта';
    
    $name = isset($inputData['name']) ? htmlspecialchars($inputData['name']) : 'Не указано';
    $phone = isset($inputData['phone']) ? htmlspecialchars($inputData['phone']) : 'Не указано';
    $service = isset($inputData['selectedService']) ? htmlspecialchars($inputData['selectedService']) : 'Не указано';
    $quantity = isset($inputData['quantity']) ? htmlspecialchars($inputData['quantity']) : 'Не указано';
    $duration = isset($inputData['duration']) ? htmlspecialchars($inputData['duration']) : 'Не указано';
    $message = isset($inputData['message']) ? htmlspecialchars($inputData['message']) : 'Не указано';
    
    $body = "Имя: $name\n";
    $body .= "Телефон: $phone\n";
    $body .= "Тип персонала: $service\n";
    $body .= "Количество сотрудников: $quantity\n";
    $body .= "Срок работы (в днях): $duration\n";
    $body .= "Сообщение: $message\n";
} else {
    // Это контактная форма
    $subject = 'Новое сообщение с сайта';
    
    $name = isset($inputData['name']) ? htmlspecialchars($inputData['name']) : 'Не указано';
    $phone = isset($inputData['phone']) ? htmlspecialchars($inputData['phone']) : 'Не указано';
    $message = isset($inputData['message']) ? htmlspecialchars($inputData['message']) : 'Не указано';
    
    $body = "Имя: $name\n";
    $body .= "Телефон: $phone\n";
    $body .= "Сообщение: $message\n";
}

// Заголовки письма
$headers = 'From: webmaster@staffpro.ru' . "\r\n" .
    'Reply-To: webmaster@staffpro.ru' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

// Отправка письма
$success = mail($to, $subject, $body, $headers);

// Возврат результата в формате JSON
header('Content-Type: application/json');

if ($success) {
    echo json_encode(['success' => true, 'message' => 'Сообщение успешно отправлено']);
} else {
    echo json_encode(['success' => false, 'message' => 'Ошибка при отправке сообщения']);
}
?>
