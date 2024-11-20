import bcrypt from 'bcrypt';
import User from '../models/User.js';

// Login Controller
export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Encontrar usuário pelo email
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Comparar a senha fornecida com a senha criptografada
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Login bem-sucedido
    res.status(200).json({ message: 'Login successful', user });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};
