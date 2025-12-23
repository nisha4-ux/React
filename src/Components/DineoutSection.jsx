import dineoutData from "../data/dineoutData";

const DineoutSection = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ marginBottom: "16px" }}>
        Discover best restaurants on Dineout
      </h2>

      <div
        style={{
          display: "flex",
          gap: "20px",
          overflowX: "auto",
          paddingBottom: "10px",
        }}
      >
        {dineoutData.map((item) => (
          <div
            key={item.id}
            style={{
              minWidth: "300px",
              borderRadius: "16px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              background: "#fff",
            }}
          >
            <img
              src={item.image}
              alt={item.name}
              style={{
                width: "100%",
                height: "180px",
                objectFit: "cover",
                borderTopLeftRadius: "16px",
                borderTopRightRadius: "16px",
              }}
            />

            <div style={{ padding: "12px" }}>
              <h3>{item.name}</h3>
              <p>{item.cuisine}</p>
              <p>{item.location}</p>
              <p>{item.price}</p>

              <p
                style={{
                  color: "green",
                  fontWeight: "bold",
                  marginTop: "6px",
                }}
              >
                ⭐ {item.rating}
              </p>

              <div
                style={{
                  marginTop: "10px",
                  background: "#e8f9f1",
                  padding: "8px",
                  borderRadius: "8px",
                  fontSize: "14px",
                  color: "#0f8a5f",
                }}
              >
                {item.offer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DineoutSection;
