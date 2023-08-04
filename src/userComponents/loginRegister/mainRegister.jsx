import { Form, Input, Button, Alert } from "antd";

function MainRegister() {
  return (
    <center>
      <div className="flex justify-center w-[480px] h-[55rem] border-2 mt-[20px]">
        <div className="w-[450px]">
          <h1 className="text-3xl mb-4 mr-[40%] mt-5">Daftar Akun Anda</h1>
          <div className="login-container">
            <Form>
              <div className="form-item mt-[30px]">
                <label htmlFor="fullName" className="flex">
                  Full Name
                </label>{" "}
                <Form.Item
                  name="fullName"
                  className="mt-1"
                >
                  <Input id="fullName" placeholder="Full Name" />
                </Form.Item>
              </div>

              <div className="form-item">
                <label htmlFor="email" className="flex">
                  Email
                </label>{" "}
                <Form.Item
                  name="email"
                  className="mt-1"
                >
                  <Input id="email" placeholder="Email" />
                </Form.Item>
              </div>

              <div className="form-item">
                <label htmlFor="phoneNumber" className="flex">
                  Nomor Telepon
                </label>{" "}
                <Form.Item
                  name="phoneNumber"
                  className="mt-1"
                >
                  <Input id="phoneNumber" placeholder="Nomor Telepon" />
                </Form.Item>
              </div>

              <div className="form-item">
                <label htmlFor="dateOfBirth" className="flex">
                  Tangggal Lahir
                </label>{" "}
                <Form.Item
                  name="dateOfBirth"
                  className="mt-1"
                >
                  <Input id="dateOfBirth" placeholder="Tangggal Lahir" />
                </Form.Item>
              </div>

              <div className="form-item">
                <label htmlFor="country" className="flex">
                  Negara
                </label>{" "}
                <Form.Item
                  name="country"
                  className="mt-1"
                >
                  <Input id="country" placeholder="Negara" />
                </Form.Item>
              </div>

              <div className="form-item">
                <label htmlFor="location" className="flex">
                  Domisili
                </label>{" "}
                <Form.Item
                  name="location"
                  className="mt-1"
                >
                  <Input id="location" placeholder="Domisili" />
                </Form.Item>
              </div>

              <div className="form-item">
                <label htmlFor="password" className="flex">
                  Kata Sandi
                </label>{" "}
                <Form.Item
                  name="password"
                  className="mt-1"
                >
                  <Input.Password id="password" placeholder="Kata Sandi" />
                </Form.Item>
              </div>

              <div className="form-item">
                <label htmlFor="confirmPassword" className="flex">
                  Confirm Password
                </label>{" "}
                <Form.Item
                  name="confirmPassword"
                  className="mt-1"
                >
                  <Input.Password
                    id="confirmPassword"
                    placeholder="Confirm Password"
                  />
                </Form.Item>
              </div>

              <Button
                type="primary"
                htmlType="submit"
                className="mt-2 w-[90%] border-black text-black"
              >
                Register
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </center>
  );
}

export default MainRegister;
