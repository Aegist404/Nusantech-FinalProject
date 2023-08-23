import { useState } from "react";
import { Form, Input, Button, Alert } from "antd";

const MainLogin =() => {
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
            window.open("/home", "_self");
        }
    };

    return (
        <center>
            <div className="flex justify-center w-[450px] h-[35rem] border-2 mt-10">
                <div className="login-container mt-[15px">
                    <div className="flex justify-between items-center mt-5">
                        <h1 className="text-3xl">Login</h1>
                        <span>
                            <a href="">Daftar Akun Baru</a>
                        </span>
                    </div>
                    <Form onFinish={handleSubmit}>
                        <div className="form-item mt-[30px]">
                            <label htmlFor="username" className="flex">
                                Username
                            </label>{" "}
                            <Form.Item
                                name="Username"
                                className="mt-1"
                                rules={[{ required: true, message: "Mohon masukkan username" }]}
                            >
                                <Input
                                    id="username"
                                    placeholder="Username atau email Nusa Lms"
                                    value={username}
                                />
                            </Form.Item>
                        </div>
                        <div className="form-item">
                            <label htmlFor="password" className="flex">
                                Password
                            </label>{" "}
                            <Form.Item
                                name="password"
                                className="mt-1"
                            >
                                <Input.Password
                                    id="password"
                                    placeholder="Password Nusa Lms"
                                    value={password}
                                />
                            </Form.Item>
                        </div>
                    </Form>
                    <Button
                        type="primary"
                        htmlType="submit"
                        className=" mt-2 w-[60%] border-black text-black"
                    >
                        Login
                    </Button>
                    <div className="flex items-center mt-4">
                        <hr className="flex-1 border-black mr-2" />
                        <span className="text-sm">Atau</span>
                        <hr className="flex-1 border-black ml-2" />
                    </div>

                    <div className="justify-center mt-4">
                        <Button type="primary" className="mr-2 w-[100%] border-black text-black">
                            Masuk Dengan Google
                        </Button>
                        <Button type="primary" className="mr-2 w-[100%] mt-7 border-black text-black">
                            Masuk Dengan Facebook
                        </Button>
                    </div>
                    <div className="flex items-center mt-4">
                        <hr className="flex-1 border-black mr-2" />
                        <span className="text-sm">Atau</span>
                        <hr className="flex-1 border-black ml-2" />
                    </div>
                    <div className="mt-4 text-[13px]">
                    <a href="">Masuk ke Halaman <span className="text-teal-500">kelola training</span></a>
                    </div>
                    {showAlert && <Alert type="error" message={message} />}
                </div>
            </div>
        </center>
    );
}

export default MainLogin;