import Button from '@/components/form/Button';
import SectionTitle from '@/components/shared/SectionTitle';
import { FiCoffee } from 'react-icons/fi';
import { HiOutlineChartBar, HiOutlineFire, HiOutlineUsers } from 'react-icons/hi';
import ProgressBar from '@/components/shared/ProgressBar';

const AboutSection = () => {
  return (
    <>
      <SectionTitle>About Me</SectionTitle>

      <div className="grid grid-cols-1 gap-6 py-6 md:grid-cols-2 lg:gap-8">
        {/* Bio */}
        <div className="">
          <p className="text-justify">
          Hi, I'm Sanzida Tasnim, a skilled web developer with a passion for creating exceptional online experiences. With expertise in HTML, CSS, PHP, Laravel and Basic of JavaScript. I specialize in crafting visually appealing and user-friendly websites. I thrive on staying up-to-date with the latest industry trends and technologies to deliver cutting-edge solutions. Let's collaborate and bring your digital vision to life.
          </p>
          <Button className="mt-5">Download CV</Button>
        </div>

        {/* Skills */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-4">
          <div className="">
            <div className="mb-3 flex justify-between">
              <h6 className="font-semibold">PHP / Laravel</h6>
              <p>85%</p>
            </div>
            <ProgressBar color="blue" progress={85} />
          </div>
          <div className="">
            <div className="mb-3 flex justify-between">
              <h6 className="font-semibold">JavaScript</h6>
              <p>70%</p>
            </div>
            <ProgressBar color="amber" progress={70} />
          </div>
          <div className="">
            <div className="mb-3 flex justify-between">
              <h6 className="font-semibold">Tailwind CSS & Bootstrap</h6>
              <p>95%</p>
            </div>
            <ProgressBar color="green" progress={95} />
          </div>
          
          <div className="">
            <div className="mb-3 flex justify-between">
              <h6 className="font-semibold">HTML & CSS</h6>
              <p>95%</p>
            </div>
            <ProgressBar color="rose" progress={95} />
          </div>
        </div>
      </div>

      {/* Overview */}
      <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3">
        <div className="flex">
          <div className="mr-5 text-gray-300">
            <HiOutlineFire size={50} />
          </div>
          <div>
            <h2 className="text-3xl font-bold">10+</h2>
            <p className="mt-1">Projects Completed</p>
          </div>
        </div>
        <div className="flex">
          <div className="mr-5 text-gray-300">
            <FiCoffee size={50} />
          </div>
          <div>
            <h2 className="text-3xl font-bold">30+</h2>
            <p className="mt-1">Cup of Coffee</p>
          </div>
        </div>
        <div className="flex">
          <div className="mr-5 text-gray-300">
            <HiOutlineChartBar size={50} />
          </div>
          <div>
            <h2 className="text-3xl font-bold">1+</h2>
            <p className="mt-1">Years of Learning experience</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
