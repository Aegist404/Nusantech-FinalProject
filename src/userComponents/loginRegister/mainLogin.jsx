import { useState } from "react";
import { Form, Input, Button, Alert } from "antd";

function MainLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !password) {
      setShowAlert(true);
      setMessage("Mohon lengkapi data login");
    } else {
      const user = { username, password };
      const json = JSON.stringify(user);
      localStorage.setItem(username, json);
      window.open("/", "_self");
    }
  };

  return (
    <center>
      <div className="flex justify-center bg-orange-600 w-[500px] h-[30rem]">
        <div className="login-container mt-[15px]">
          <div className="flex justify-between items-center mb-4 gap-[280px]">
            <h1 className="text-2xl">Login</h1>
            <span>
              <a href="">Daftar Akun Baru</a>
            </span>
          </div>
          <Form onFinish={handleSubmit}>
            <div className="form-item">
              <label htmlFor="username" className="flex">
                USERNAME
              </label>{" "}
              {/* Tambahkan label secara manual */}
              <Form.Item
                name="username"
                className="mt-[10px]"
                rules={[{ required: true, message: "Mohon masukkan username" }]}
              >
                <Input
                  id="username"
                  placeholder="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </Form.Item>
            </div>
            <div className="form-item mt-[-20px]">
              <label htmlFor="password" className="flex mt">
                PASSWORD
              </label>{" "}
              {/* Tambahkan label secara manual */}
              <Form.Item
                name="password"
                className="mt-[10px]"
                rules={[{ required: true, message: "Mohon masukkan password" }]}
              >
                <Input.Password
                  id="password"
                  placeholder="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Item>
            </div>
            </Form>
            <Button
              type="primary"
              htmlType="submit"
              className="bg-black mt-2"
              style={{ width: "100%" }} // Menyesuaikan lebar tombol dengan input di atasnya
            >
              Login
            </Button>
            <div style={{ display: "flex", alignItems: "center" }}>
              <hr
                style={{ flex: 1, borderColor: "black", marginRight: "10px" }}
              />
              <span style={{ fontSize: "14px" }}>Atau</span>
              <hr
                style={{ flex: 1, borderColor: "black", marginLeft: "10px" }}
              />
            </div>
            <div className="justify-center mt-4">
              <Button type="primary" className="mr-2 w-[100%] bg-black">
                Masuk Dengan Google
              </Button>
              <Button type="primary" className="mr-2 w-[100%] bg-black mt-1">
                Masuk Dengan Facebook
              </Button>
            </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <hr
                  style={{ flex: 1, borderColor: "black", marginRight: "10px" }}
                />
                <span style={{ fontSize: "14px" }}>Atau</span>
                <hr
                  style={{ flex: 1, borderColor: "black", marginLeft: "10px" }}
                />
              </div>
              <a href="">Masuk ke Halaman <span className="text-teal-500">kelola training</span></a>
          {showAlert && <Alert type="error" message={message} />}
        </div>
      </div>
    </center>
  );
}

export default MainLogin;
