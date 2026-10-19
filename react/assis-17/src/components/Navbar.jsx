function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px",
        background: "#111",
        color: "white",
      }}
    >
      <h2>🎬 MovieFlix</h2>

      <div>
        <button>Home</button>
        <button style={{ marginLeft: "10px" }}>Favorites</button>
      </div>
    </nav>
  );
}

export default Navbar;