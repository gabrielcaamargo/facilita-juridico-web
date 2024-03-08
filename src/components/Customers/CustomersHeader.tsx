export function CustomersHeader() {
  return (
    <div className="flex items-center justify-between">
      <h2 className="font-bold text-xl">Clientes</h2>
      <button
        className="text-white rounded bg-blue-500 duration-75 ease-in hover:bg-blue-600 active:opacity-75 p-2"
      >
          Novo cliente
      </button>
    </div>
  );
}
