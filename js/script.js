document.addEventListener("DOMContentLoaded", function() {
    var modal = document.getElementById("loginModal");
    var button = document.getElementById("loginButton");
    var span = document.getElementsByClassName("close")[0];

    button.onclick = function () {
        modal.style.display = "block";
    }

    span.onclick = function () {
        modal.style.display = "none";
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});
// Danh sách các tên người dùng và mật khẩu
const users = [
    { username: "bill", password: "1" },
    { username: "masha", password: "digiuni" },
    { username: "user3", password: "password3" }
];

// Hàm kiểm tra đăng nhập
function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Kiểm tra tên người dùng và mật khẩu
    const isValid = checkLogin(username, password);

    if (isValid) {
        // Đăng nhập thành công
        alert("Login success!");
        // Chuyển hướng sang trang learning_resource.html
        window.location.href = "learning_resource.html";
    } else {
        // Đăng nhập không thành công
        alert("Login failed. Invalid username or password.");
    }
}

// Hàm kiểm tra tên người dùng và mật khẩu
function checkLogin(username, password) {
    // Lặp qua danh sách người dùng và kiểm tra
    for (let user of users) {
        if (user.username === username && user.password === password) {
            return true; // Tên người dùng và mật khẩu hợp lệ
        }
    }
    return false; // Tên người dùng hoặc mật khẩu không hợp lệ
}
document.addEventListener("DOMContentLoaded", function() {
    var languageSelect = document.getElementById("language-select");
    var currentFileName = getCurrentFileName(); // Lưu trữ tên file hiện tại khi trang được tải

    languageSelect.addEventListener("change", function() {
        var selectedLanguage = languageSelect.value;
        var newUrl;

        if (selectedLanguage === "en") {
            newUrl = currentFileName + "_en.html";
        } else {
            newUrl = currentFileName + ".html";
        }

        // Chuyển hướng URL đến trang tương ứng với ngôn ngữ được chọn
        window.location.href = newUrl;
    });

    // Hàm để lấy tên file hiện tại
    function getCurrentFileName() {
        var urlParts = window.location.pathname.split("/");
        var fileNameWithExtension = urlParts[urlParts.length - 1];
        return fileNameWithExtension.split(".")[0];
    }
});
