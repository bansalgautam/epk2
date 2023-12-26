import AboutCard from "@/src/components/AboutCard";

export default function Home() {
  const data = [
    {
      src: "/image.jpg",
      title: "SAKA",
      subtitle: "Singer / Lyricist",
      about:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed enim malesuada, feugiat urna sed, consequat ipsum. Donec tempus nibh ac aliquet porttitor. Quisque a orci bibendum, scelerisque quam in, lacinia mauris. Pellentesque ut metus ligula. Sed scelerisque a velit a egestas. Suspendisse mauris metus, semper ullamcorper dignissim ac, viverra vitae felis. Proin eget hendrerit sapien, et rhoncus massa. Sed pretium non arcu eu pellentesque. Ut vehicula nulla dolor, at ultricies tortor mollis et. In massa nibh, dignissim sed cursus ut, euismod a elit. Cras placerat lectus eget tortor imperdiet, quis laoreet diam interdum. Sed sed cursus quam.",
      about2:
        "Suspendisse bibendum condimentum felis, et volutpat turpis sollicitudin quis. Fusce eu tempor nulla. Cras a nunc sapien. Praesent gravida ante et mauris tempus, vel fermentum urna scelerisque. Praesent molestie condimentum nunc vel tristique. Maecenas elit dolor, luctus in dui sed, elementum tempus felis. Nullam posuere elementum ultricies. Morbi ante enim, vehicula eu iaculis eu, suscipit id purus. Proin sem purus, fermentum non venenatis sit amet, tincidunt a lacus. Fusce sodales lorem vitae sodales facilisis.",
      className: "flex-row-reverse",
      facebook:
        "",
      instagram: "",
      twitter: "",
    },
    {
      src: "/D.jpg",
      title: "DH1MAN MUSIC",
      subtitle: "Producer / Beat Maker",
      about:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed enim malesuada, feugiat urna sed, consequat ipsum. Donec tempus nibh ac aliquet porttitor. Quisque a orci bibendum, scelerisque quam in, lacinia mauris. Pellentesque ut metus ligula. Sed scelerisque a velit a egestas. Suspendisse mauris metus, semper ullamcorper dignissim ac, viverra vitae felis. Proin eget hendrerit sapien, et rhoncus massa. Sed pretium non arcu eu pellentesque. Ut vehicula nulla dolor, at ultricies tortor mollis et. In massa nibh, dignissim sed cursus ut, euismod a elit. Cras placerat lectus eget tortor imperdiet, quis laoreet diam interdum. Sed sed cursus quam.",
      about2:
        "Suspendisse bibendum condimentum felis, et volutpat turpis sollicitudin quis. Fusce eu tempor nulla. Cras a nunc sapien. Praesent gravida ante et mauris tempus, vel fermentum urna scelerisque. Praesent molestie condimentum nunc vel tristique. Maecenas elit dolor, luctus in dui sed, elementum tempus felis. Nullam posuere elementum ultricies. Morbi ante enim, vehicula eu iaculis eu, suscipit id purus. Proin sem purus, fermentum non venenatis sit amet, tincidunt a lacus. Fusce sodales lorem vitae sodales facilisis.",
      className: "flex-row",
      facebook:
        "https://www.facebook.com/profile.php?id=100092288401004&mibextid=2JQ9oc",
      instagram: "https://www.instagram.com/dh1manmusic",
      twitter: "https://x.com/DH1MANMUSIC?t=iSTJHeqa9-mflMNB78RAEA&s=09",
    },
  ];

  return (
    <div className="select-none text-white min-h-full">
      {data.map((item, index) => (
        <AboutCard {...item} key={index} />
      ))}
    </div>
  );
}
