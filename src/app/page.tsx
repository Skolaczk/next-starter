import { Icons } from '@/components/icons';

const Home = () => {
  return (
    <div>
      <h1 className="font-mono">Hello world</h1>
      <button>
        <Icons.arrowLeft />
      </button>
      <button>
        <Icons.arrowRight />
      </button>
      <button>
        <Icons.github className="size-10" />
      </button>
    </div>
  );
};

export default Home;
