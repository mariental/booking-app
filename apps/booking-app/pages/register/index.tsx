import { Container, CssBaseline, Box, Avatar, Typography, Grid, TextField, Button } from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "apps/booking-app/firebase/firebaseApp";
import { useRouter } from "next/router";

export interface RegisterProps {}

export function Register(props: RegisterProps) {  
  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = data.get('firstName').toString() + " " + data.get('lastName').toString();
    const email = data.get('email').toString();
    const password = data.get('password').toString();
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      saveUser(name, email)
      .then((data) => {
        router.push("/profile");
      });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
  };

  const saveUser = async (name: string, email: string) => {
    const data = {
      name: name,
      email: email,
    };
    const resonse = await fetch(`/api/user`, {
      method: "POST",
      body: JSON.stringify(data)
    });
    return resonse.json();
  }

  return (
    <Container component="main" maxWidth="xs">
    <CssBaseline />
    <Box
      sx={{
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: 'secondary.main', width: 56, height: 56 }}>
        <LockOutlinedIcon sx={{ color: 'black' }}/>
      </Avatar>
      <Typography component="h1" variant="h5">
        Rejestracja
      </Typography>
      <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              autoComplete="given-name"
              name="firstName"
              required
              fullWidth
              id="firstName"
              label="Imię"
              autoFocus
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              id="lastName"
              label="Nazwisko"
              name="lastName"
              autoComplete="family-name"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              name="password"
              label="Hasło"
              type="password"
              id="password"
              autoComplete="new-password"
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Zarejestruj
        </Button>
      </Box>
    </Box>
  </Container>
  );
}

export default Register;
