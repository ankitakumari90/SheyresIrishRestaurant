import DropdownMenu from "../components/DropDownMenu";

export default function MenusPage() {
  return (
    <div className="p-10 text-black">
      <h1 className="text-4xl font-serif mb-4">Our Menus</h1>
      <p className="text-lg max-w-3xl">
        Explore delicious starters, mains, desserts, and beverages curated by our chefs.
      </p>
      <DropdownMenu/>
    </div>
  );
}
