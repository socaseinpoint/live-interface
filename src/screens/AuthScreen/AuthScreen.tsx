import { Form, Input, PasswordInput, Button, Field } from "../../components";
import styles from "./AuthScreen.module.scss";
import { isRequired } from "../../services";
import { PUBLIC_URL } from "../../constants";

const AuthScreen = () => {
  const onSubmit = ({ login, password }: { [key: string]: string }) => {
    alert(`Email: ${login} Password: ${password}`);
  };

  return (
    <div className={styles.root}>
      <div className={styles.form}>
        <h1 className={styles.title}>Live interface</h1>
        <Form
          onSubmit={onSubmit}
          validators={{
            login: [isRequired("Login is required")],
            password: [isRequired("Password is required")],
          }}
          render={() => (
            <>
              <div className={styles.field}>
                <Field
                  name="login"
                  render={(props) => (
                    <Input
                      type="email"
                      {...props}
                      icon={PUBLIC_URL + "icons/user.svg"}
                    />
                  )}
                  placeholder="Email"
                />
              </div>
              <div className={styles.field}>
                <Field
                  name="password"
                  render={(props) => (
                    <PasswordInput
                      {...props}
                      icon={PUBLIC_URL + "icons/lock.svg"}
                    />
                  )}
                  placeholder="Password"
                />
              </div>
              <Button title="Submit" autoWidth />
            </>
          )}
        ></Form>
      </div>
    </div>
  );
};

export default AuthScreen;
