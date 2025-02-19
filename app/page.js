import Link from "next/link";
export default function Page() {
  return (
    <div>
      <h1>Hello World!</h1>
      <p>This is a simple web page</p>
      <p>
        Link to week 2: <Link href="week-2">Week 2</Link>
      </p>
      <p>
        Link to week 3: <Link href="week-3">Week 3</Link>
      </p>
      <p>
        Link to week 4: <Link href="week-4">Week 4</Link>
      </p>
      <p>
        Link to week 5: <Link href="week-5">Week 5</Link>
      </p>
      <p>
        Link to week 6: <Link href="week-6">Week 6</Link>
      </p>
    </div>
  );
}
