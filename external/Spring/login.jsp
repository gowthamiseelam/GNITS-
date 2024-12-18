<%-- 
    Document   : login
    Created on : 17 Dec, 2024, 11:05:11 PM
    Author     : GOUTHAMI
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>Login</title>
</head>
<body>
    <h2>User Login</h2>
    <form action="welcome.htm" method="POST">
        <label for="username"><b>Username:</b></label>
        <input type="text" name="username" id="username" required /><br><br>
        <input type="submit" value="Login" />
    </form>
</body>
</html>