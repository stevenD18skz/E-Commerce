import { useRouter } from "next/router";

export default function Room() {
  const router = useRouter();
  const { room } = router.query.room; // Captura el parámetro dinámico de la URL

  return (
    <div className="min-h-screen text-center flex items-center">
      <p>ola {room}</p>
    </div>
  );
}
