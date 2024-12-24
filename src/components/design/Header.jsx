import { background } from "../../assets";

export const Rings = () => {

/* Offset means "move the element slightly"
     {absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2} 
      1/2 = 50% 
    Explanation:
    ------------
      absolute: Positions the child.
      top-1/2 left-1/2: Moves the child to the center of the parent.
      -translate-x-1/2 -translate-y-1/2: Offsets the child by half its width and height for perfect centering. (- minus means opposite side like x-moves left instead of right, y- moves up instead of bottom)

    Which to Use?
    -------------
      Use Flexbox (flex justify-center items-center) if you need to center content dynamically and align multiple items.
      Use Margins and Transforms (top-1/2 left-1/2 translate) if you want precise positioning for a single element.
    
    aspect-square= 1:1, same ratio of given height or width like here w-[51.375rem] means 822px so 1:1 = 822x822, same height and width will create a square 

    Key Rules of absolute Positioning:
    ---------------------------------
      An element with position: absolute is positioned relative to its nearest positioned ancestor. A "positioned ancestor" is any ancestor with position: relative, absolute, fixed, or sticky.
      If no positioned ancestor exists, the element is positioned relative to the viewport.

    Parent and Child Both absolute:
    -------------------------------
      If the parent has position: absolute and the child also has position: absolute, the child is positioned relative to the parent, not the viewport.
      The parent itself will be positioned relative to its nearest positioned ancestor (or the viewport if none exists).
      
    */

  return (
    <div className="absolute top-1/2 left-1/2 w-[51.375rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2">
      <div className="absolute top-1/2 left-1/2 w-[36.125rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute top-1/2 left-1/2 w-[23.125rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
    </div>
  );
};

export const SideLines = () => {
  return (
    <>
      <div className="absolute top-0 left-5 w-0.25 h-full bg-n-6"></div>
      <div className="absolute top-0 right-5 w-0.25 h-full bg-n-6"></div>
    </>
  );
};

export const BackgroundCircles = () => {
  return (
    <>
      <div className="absolute top-[4.4rem] left-16 w-3 h-3 bg-gradient-to-b from-[#DD734F] to-[#1A1A32] rounded-full"></div>
      <div className="absolute top-[12.6rem] right-16 w-3 h-3 bg-gradient-to-b from-[#B9AEDF] to-[#1A1A32] rounded-full"></div>
      <div className="absolute top-[26.8rem] left-12 w-6 h-6 bg-gradient-to-b from-[#88E5BE] to-[#1A1A32] rounded-full"></div>
    </>
  );
};

export const HamburgerMenu = () => {
  return (
    <div className="absolute inset-0 pointer-events-none lg:hidden">
      <div className="absolute inset-0 opacity-[.03]">
        <img
          className="w-full h-full object-cover"
          src={background}
          width={688}
          height={953}
          alt="Background"
        />
      </div>

      <Rings />

      <SideLines />

      <BackgroundCircles />
    </div>
  );
};
