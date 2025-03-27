import bcrypt from "bcrypt";

export async function saltAndHashPassword(password: string): Promise<string> {
  const saltRounds = 10; // Nombre de rounds pour le salt (plus c'est élevé, plus c'est sécurisé mais plus lent)
  const salt = await bcrypt.genSalt(saltRounds);
  const hashedPassword = await bcrypt.hash(password, salt);

  return hashedPassword.toString();
}
