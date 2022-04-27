import React from 'react';
import FaceBook from '../Icon/Icon';
import InstagramIcon from '../Icon/Icon';
import Linkedin from '../Icon/Icon';

function Profile() {
  return (
    <section class="bg-half-170 d-table w-100">
      <div class="container">
        <div class="row justify-content-center mt-5">
          <div class="col-lg-10">
            <div class="section-title text-center">
              <img src="/asset/images/blog/04.jpg" class="img-fluid avatar avatar-large rounded-pill shadow-md" alt="" />

              <h4 class="title mt-4 mb-0">Cristina Jota</h4>
              <small class="fw-bold text-primary">PHOTOGRAPHER & BLOGGER</small>
            </div>
          </div>

          <div class="col-lg-10 mt-4 pt-2">
            <p class="text-muted">
              Appropriately empower dynamic leadership skills after business portals. Globally myocardinate interactive supply chains with
              distinctive quality vectors. Globally revolutionize global sources through interoperable services.Quickly aggregate and
              worldwide potentialities. spirits boom yardarm supply chains with distinctive quality vectors. Globally revolutionize global
              sources through interoperable services.
            </p>
            <p class="text-muted">
              Dynamically reinvent market-driven opportunities, fingerstache single-origin coffee Enthusiastically mesh long-term
              high-impact infrastructures vis-a-vis efficient customer service. Professionally fashion wireless leadership rather than
              prospective experiences. Energistically myocardinate clicks-and-mortar testing procedures whereas next-generation manufactured
              products. knausgaard portland keytar pop-up. Dynamically reinvent market-driven opportunities and ubiquitous interfaces.
              Energistically fabricate an expanded array of niche markets through robust products.
            </p>
            <p class="text-muted">
              Compellingly embrace empowered e-business after user friendly intellectual capital. Interactively actualize front-end
              processes with effective convergence. Synergistically deliver performance based methods of empowerment whereas distributed
              expertise.
            </p>

            <ul class="list-unstyled text-center social-icon social mb-0 mt-4 pt-2">
              <li class="list-inline-item">
                <a href="javascript:void(0)" class="rounded-pill">
                  <i class="fea icon-sm fea-social">
                    <FaceBook />
                  </i>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="javascript:void(0)" class="rounded-pill">
                  <i class="fea icon-sm fea-social">
                    <InstagramIcon />
                  </i>
                </a>
              </li>

              <li class="list-inline-item">
                <a href="javascript:void(0)" class="rounded-pill">
                  <i class="fea icon-sm fea-social">
                    <Linkedin />
                  </i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;
